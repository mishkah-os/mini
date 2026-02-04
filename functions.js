(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], function () { return factory(root); });
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory(root);
  } else {
    root.BrockerFunctions = factory(root);
  }
}(typeof window !== 'undefined' ? window : this, function (global) {
  "use strict";

  function findById(list, id) {
    var i;
    for (i = 0; i < list.length; i += 1) {
      if (list[i].id === id) return list[i];
    }
    return null;
  }


  function t(db, key) {
    if (!db || !db.i18n || !db.i18n.dict || !db.i18n.dict[key]) return key;
    return db.i18n.dict[key][db.env.lang] || key;
  }

  function getUser(db, userId) {
    return findById(db.data.users, userId);
  }

  function formatPrice(listing) {
    if (!listing) return '';
    if (listing.price_amount == null) return '';
    var amount = listing.price_amount;
    var currency = listing.currency || '';
    return amount + ' ' + currency;
  }

  function toggleTheme(ctx) {
    ctx.setState(function (state) {
      var next = Object.assign({}, state);
      next.env = Object.assign({}, state.env);
      next.env.theme = next.env.theme === 'dark' ? 'light' : 'dark';
      if (next.data && next.data.activity_log) {
        next.data.activity_log = next.data.activity_log.concat([{ type: 'theme', value: next.env.theme, ts: Date.now() }]);
      }
      return next;
    });
  }

  function toggleLang(ctx) {
    ctx.setState(function (state) {
      var next = Object.assign({}, state);
      next.env = Object.assign({}, state.env);
      next.env.lang = next.env.lang === 'ar' ? 'en' : 'ar';
      next.env.dir = next.env.lang === 'ar' ? 'rtl' : 'ltr';
      if (next.data && next.data.activity_log) {
        next.data.activity_log = next.data.activity_log.concat([{ type: 'lang', value: next.env.lang, ts: Date.now() }]);
      }
      return next;
    });
  }

  function navigateTo(ctx, screenName) {
    ctx.setState(function (state) {
      var next = Object.assign({}, state);
      next.data = Object.assign({}, state.data);
      next.data.currentScreen = screenName;
      if (next.data && next.data.activity_log) {
        next.data.activity_log = next.data.activity_log.concat([{ type: 'nav', value: screenName, ts: Date.now() }]);
      }
      return next;
    });
  }

  function logEvent(ctx, payload) {
    ctx.setState(function (state) {
      var next = Object.assign({}, state);
      next.data = Object.assign({}, state.data);
      if (!next.data.activity_log) next.data.activity_log = [];
      next.data.activity_log = next.data.activity_log.concat([payload]);
      return next;
    });
  }

  return {
    t: t,
    getUser: getUser,
    formatPrice: formatPrice,
    toggleTheme: toggleTheme,
    toggleLang: toggleLang,
    navigateTo: navigateTo,
    logEvent: logEvent
  };
}));
