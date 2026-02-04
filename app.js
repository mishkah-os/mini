import { createDB } from './lib/mishkah.simple-store.js';

(function () {
    'use strict';

    // 1. Definition (Schema-Driven)
    // We use strict variable names from 'brocker2.json' schema & 'initial.json' seeds.
    const MODULE_CONFIG = {
        branchId: 'aqar2',
        moduleId: 'brocker2',
        objects: {
            // Core Settings (Synced)
            app_settings: { table: 'app_settings' },

            // Market Inventory (Fetched/Synced)
            projects: { table: 'projects' },
            units: { table: 'units' },
            developers: { table: 'developers' },
            regions: { table: 'regions' },

            // Social / Community (Synced)
            posts: { table: 'posts' },
            reels: { table: 'reels' }
        }
    };

    // 2. Initialization
    async function init() {
        console.log('[Brocker2] Initializing Schema-Driven App...');

        // A. Connect to Mishkah Store
        const db = createDB(MODULE_CONFIG);

        // Expose DB globally for UI components (as requested in "Old Project" style)
        window.db = db;

        // B. Initial State
        // We can pre-fill state based on schema defaults if needed
        db.setState(state => ({
            ...state,
            ui: {
                activeView: 'home',
                selectedProjectId: null,
                selectedUnitId: null
            }
        }));

        // C. Watchers (Reactivity)
        // When "posts" or "reels" change, re-render
        db.watch('posts', () => Mishkah.app.render());
        db.watch('reels', () => Mishkah.app.render());

        // D. Mount UI
        // Using global 'BrockerUI' and 'BrockerOrders' as per existing Setup
        if (window.Mishkah && window.BrockerUI) {
            Mishkah.app.setBody(BrockerUI.body);
            Mishkah.app.create(db, window.BrockerOrders || {}).mount('#app');
            console.log('[Brocker2] App Mounted.');
        } else {
            console.error('[Brocker2] core UI components missing.');
        }
    }

    // Start
    init();

})();
