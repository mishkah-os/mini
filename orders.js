(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], function () { return factory(root, root.BrockerFunctions); });
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory(root, root.BrockerFunctions);
  } else {
    root.BrockerOrders = factory(root, root.BrockerFunctions);
  }
}(typeof window !== 'undefined' ? window : this, function (global, BrockerFunctions) {
  "use strict";

  var F = BrockerFunctions || global.BrockerFunctions;

  var orders = {
    'sys.toggleTheme': {
      on: ['click'],
      gkeys: ['sys:theme'],
      handler: function (e, ctx) {
        F.toggleTheme(ctx);
      }
    },
    'sys.toggleLang': {
      on: ['click'],
      gkeys: ['sys:lang'],
      handler: function (e, ctx) {
        F.toggleLang(ctx);
      }
    },
    'nav.goHome': {
      on: ['click'],
      gkeys: ['nav:home'],
      handler: function (e, ctx) {
        F.navigateTo(ctx, 'home');
      }
    },
    'nav.goReels': {
      on: ['click'],
      gkeys: ['nav:reels'],
      handler: function (e, ctx) {
        F.navigateTo(ctx, 'reels');
      }
    },
    'nav.goInbox': {
      on: ['click'],
      gkeys: ['nav:inbox'],
      handler: function (e, ctx) {
        F.navigateTo(ctx, 'inbox');
      }
    },
    'nav.goProfile': {
      on: ['click'],
      gkeys: ['nav:profile'],
      handler: function (e, ctx) {
        F.navigateTo(ctx, 'profile');
      }
    }
  };

  return orders;
}));
