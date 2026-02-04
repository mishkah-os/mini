(function () {
    'use strict';

    var global = window;
    var M = global.Mishkah;

    // Module Configuration
    var BRANCH_ID = 'aqar2';
    var MODULE_ID = 'brocker2';

    // Table to Data Key Mapping
    var TABLE_TO_DATA_KEY = {
        'app_settings': 'app_settings',
        'regions': 'regions',
        'developers': 'developers',
        'projects': 'projects',
        'units': 'units',
        'posts': 'posts',
        'reels': 'reels',
        'inquiries': 'inquiries',
        'interactions': 'interactions',
        'notifications': 'notifications'
    };

    var realtime = null;
    var appInstance = null;

    // Initial Database State
    var initialDatabase = {
        env: {
            theme: 'dark',
            lang: 'ar',
            dir: 'rtl'
        },
        data: {
            app_settings: [],
            regions: [],
            developers: [],
            projects: [],
            units: [],
            posts: [],
            reels: [],
            inquiries: [],
            interactions: [],
            notifications: [],
            currentScreen: 'home',
            readyTables: []
        },
        state: {
            activeView: 'home',
            selectedProjectId: null,
            selectedUnitId: null,
            toast: null,
            loading: true,
            error: null
        }
    };

    function resolveApiBase() {
        return 'https://ws.mas.com.eg';
    }

    function fetchModuleSchema(branchId, moduleId) {
        var params = new URLSearchParams({ branch: branchId, module: moduleId });
        var base = resolveApiBase();
        var url = (base || '') + '/api/schema?' + params.toString();

        console.log('[Brocker2] Fetching schema from:', url);

        return fetch(url, { cache: 'no-store' })
            .then(function (res) {
                if (!res.ok) {
                    throw new Error('schema-request-failed: ' + res.status);
                }
                return res.json();
            })
            .then(function (payload) {
                var modules = payload && payload.modules ? payload.modules : {};
                var entry = modules[moduleId];
                if (!entry || !entry.schema) {
                    throw new Error('schema-missing');
                }
                console.log('[Brocker2] Schema loaded successfully');
                return { schema: entry.schema, moduleEntry: entry };
            });
    }

    function commitTable(app, tableName, rows) {
        if (!app) return;
        var dataKey = TABLE_TO_DATA_KEY[tableName];
        if (!dataKey) return;

        app.setState(function (db) {
            var newData = Object.assign({}, db.data);
            newData[dataKey] = Array.isArray(rows) ? rows : [];

            var newReadyTables = db.data.readyTables || [];
            if (newReadyTables.indexOf(tableName) === -1) {
                newReadyTables = newReadyTables.concat([tableName]);
            }

            var allReady = Object.keys(TABLE_TO_DATA_KEY).every(function (t) {
                return newReadyTables.indexOf(t) !== -1;
            });

            return Object.assign({}, db, {
                data: Object.assign(newData, { readyTables: newReadyTables }),
                state: Object.assign({}, db.state, {
                    loading: !allReady
                })
            });
        });
    }

    function bootstrapRealtime(app, forceLang) {
        if (!app) return;

        if (typeof global.createDBAuto !== 'function') {
            console.error('[Brocker2] createDBAuto is not available.');
            app.setState(function (db) {
                return Object.assign({}, db, {
                    state: Object.assign({}, db.state, {
                        error: 'Real-time store unavailable.',
                        loading: false
                    })
                });
            });
            return;
        }

        var currentLang = forceLang || (app.database && app.database.env && app.database.env.lang) || 'ar';

        console.log('[Brocker2] Bootstrapping realtime with lang:', currentLang);

        fetchModuleSchema(BRANCH_ID, MODULE_ID)
            .then(function (payload) {
                var schema = payload && payload.schema ? payload.schema : null;
                if (!schema) throw new Error('schema-invalid');

                var selection = Object.keys(TABLE_TO_DATA_KEY);

                console.log('[Brocker2] Creating realtime store with tables:', selection);

                realtime = global.createDBAuto(schema, selection, {
                    branchId: BRANCH_ID,
                    moduleId: MODULE_ID,
                    role: 'brocker2-mini',
                    historyLimit: 200,
                    autoReconnect: true,
                    logger: console,
                    lang: currentLang,
                    apiBaseUrl: resolveApiBase() // ✨ Use https://ws.mas.com.eg
                });

                return realtime.ready();
            })
            .then(function () {
                console.log('[Brocker2] Realtime store ready, setting up watchers');

                Object.keys(TABLE_TO_DATA_KEY).forEach(function (tableName) {
                    realtime.watch(tableName, function (rows) {
                        commitTable(app, tableName, Array.isArray(rows) ? rows : []);
                    });
                });

                realtime.status(function (status) {
                    if (status === 'error') {
                        app.setState(function (db) {
                            return Object.assign({}, db, {
                                state: Object.assign({}, db.state, {
                                    error: 'Database connection lost.'
                                })
                            });
                        });
                    } else if (status === 'ready') {
                        app.setState(function (db) {
                            if (!db.state.error) return db;
                            return Object.assign({}, db, {
                                state: Object.assign({}, db.state, { error: null })
                            });
                        });
                    }
                });

                console.log('[Brocker2] Realtime bootstrap complete');
            })
            .catch(function (error) {
                console.error('[Brocker2] Failed to bootstrap realtime:', error);
                app.setState(function (db) {
                    return Object.assign({}, db, {
                        state: Object.assign({}, db.state, {
                            error: 'Failed to load data. Please refresh.',
                            loading: false
                        })
                    });
                });
            });
    }

    function bootWithMishkahCore() {
        if (!M || !M.app || typeof M.app.create !== 'function') {
            console.error('[Brocker2] Mishkah core not available');
            return false;
        }

        console.log('[Brocker2] Booting with Mishkah Core');

        try {
            if (global.BrockerUI && typeof global.BrockerUI.body === 'function') {
                M.app.setBody(global.BrockerUI.body);
            }

            var app = M.app.create(initialDatabase, global.BrockerOrders || {});
            app.mount('#app');

            appInstance = app;

            console.log('[Brocker2] App mounted, starting realtime bootstrap');
            bootstrapRealtime(app);

            // Expose globally for debugging
            global.BrockerApp = app;
            global.db = app.database;

            return true;
        } catch (err) {
            console.error('[Brocker2] Boot failed:', err);
            return false;
        }
    }

    // Auto-boot when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function () {
            bootWithMishkahCore();
        });
    } else {
        bootWithMishkahCore();
    }

})();
