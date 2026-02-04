(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], function () { return factory(root); });
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory(root);
  } else {
    root.IndexedDBUtil = factory(root);
  }
}(typeof window !== 'undefined' ? window : this, function (global) {
  "use strict";

  var IndexedDBUtil = {};

  function openDatabase(config) {
    return new Promise(function (resolve, reject) {
      var request = global.indexedDB.open(config.name, config.version);
      request.onupgradeneeded = function (event) {
        var db = event.target.result;
        var stores = config.stores || [];
        var i;
        for (i = 0; i < stores.length; i += 1) {
          if (!db.objectStoreNames.contains(stores[i].name)) {
            db.createObjectStore(stores[i].name, { keyPath: stores[i].keyPath, autoIncrement: stores[i].autoIncrement });
          }
        }
      };
      request.onsuccess = function (event) {
        resolve(event.target.result);
      };
      request.onerror = function (event) {
        reject(event.target.error);
      };
    });
  }

  function withStore(db, storeName, mode, action) {
    return new Promise(function (resolve, reject) {
      var tx = db.transaction(storeName, mode);
      var store = tx.objectStore(storeName);
      var request = action(store);
      request.onsuccess = function (event) {
        resolve(event.target.result);
      };
      request.onerror = function (event) {
        reject(event.target.error);
      };
    });
  }

  function resetDatabase(dbName) {
    return new Promise(function (resolve, reject) {
      var request = global.indexedDB.deleteDatabase(dbName);
      request.onsuccess = function () { resolve(true); };
      request.onerror = function (event) { reject(event.target.error); };
      request.onblocked = function () { resolve(false); };
    });
  }

  IndexedDBUtil.bootstrap = function (config) {
    return openDatabase(config);
  };

  IndexedDBUtil.save = function (db, storeName, value) {
    return withStore(db, storeName, 'readwrite', function (store) {
      return store.put(value);
    });
  };

  IndexedDBUtil.get = function (db, storeName, key) {
    return withStore(db, storeName, 'readonly', function (store) {
      return store.get(key);
    });
  };

  IndexedDBUtil.getAll = function (db, storeName) {
    return withStore(db, storeName, 'readonly', function (store) {
      return store.getAll();
    });
  };

  IndexedDBUtil.logEvent = function (db, payload) {
    return withStore(db, 'logs', 'readwrite', function (store) {
      return store.add(payload);
    });
  };

  IndexedDBUtil.seedDatabase = function (config, seed) {
    var seedVersion = seed && seed.data && seed.data.seed_version ? seed.data.seed_version : '0';
    return IndexedDBUtil.bootstrap(config)
      .then(function (db) {
        return IndexedDBUtil.get(db, 'meta', 'seed_version')
          .then(function (stored) {
            if (!stored || stored.value !== seedVersion) {
              return IndexedDBUtil.save(db, 'data', { id: 'root', payload: seed })
                .then(function () { return IndexedDBUtil.save(db, 'meta', { id: 'seed_version', value: seedVersion }); })
                .then(function () { return seed; });
            }
            return IndexedDBUtil.get(db, 'data', 'root').then(function (result) {
              return result ? result.payload : seed;
            });
          });
      })
      .catch(function () {
        return resetDatabase(config.name).then(function () { return seed; });
      });
  };

  return IndexedDBUtil;
}));
