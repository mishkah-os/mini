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

  function navigate(ctx, screenName) {
    F.navigateTo(ctx, screenName);
    if (F.logEvent) {
      F.logEvent(ctx, { type: 'nav', value: screenName, ts: Date.now() });
    }
  }

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
        navigate(ctx, 'home');
      }
    },
    'nav.goReels': {
      on: ['click'],
      gkeys: ['nav:reels'],
      handler: function (e, ctx) {
        navigate(ctx, 'reels');
      }
    },
    'nav.goInbox': {
      on: ['click'],
      gkeys: ['nav:inbox'],
      handler: function (e, ctx) {
        navigate(ctx, 'inbox');
      }
    },
    'nav.goProfile': {
      on: ['click'],
      gkeys: ['nav:profile'],
      handler: function (e, ctx) {
        navigate(ctx, 'profile');
      }
    },
    'nav.goLogin': {
      on: ['click'],
      gkeys: ['nav:login'],
      handler: function (e, ctx) {
        navigate(ctx, 'login');
      }
    },
    'nav.goRegister': {
      on: ['click'],
      gkeys: ['nav:register'],
      handler: function (e, ctx) {
        navigate(ctx, 'register');
      }
    },
    'nav.goOtp': {
      on: ['click'],
      gkeys: ['nav:otp'],
      handler: function (e, ctx) {
        navigate(ctx, 'otp');
      }
    },
    'profile.edit': {
      on: ['click'],
      gkeys: ['profile:edit'],
      handler: function (e, ctx) {
        navigate(ctx, 'profile_edit');
      }
    },
    'listing.open': {
      on: ['click'],
      gkeys: ['listing:open'],
      handler: function (e, ctx) {
        var listingId = e && e.currentTarget ? e.currentTarget.getAttribute('data-listing-id') : null;
        ctx.setState(function (state) {
          var next = Object.assign({}, state);
          next.data = Object.assign({}, state.data);
          if (listingId && next.data.listings) {
            var i;
            for (i = 0; i < next.data.listings.length; i += 1) {
              if (next.data.listings[i].id === listingId) {
                next.data.active_listing = next.data.listings[i];
              }
            }
          }
          next.data.currentScreen = 'listing_detail';
          if (next.data && next.data.activity_log) {
            next.data.activity_log = next.data.activity_log.concat([{ type: 'listing_open', value: listingId, ts: Date.now() }]);
          }
          return next;
        });
      }
    },
    'listing.request': {
      on: ['click'],
      gkeys: ['listing:request'],
      handler: function (e, ctx) {
        navigate(ctx, 'office_dashboard');
      }
    },
    'listing.create': {
      on: ['click'],
      gkeys: ['listing:create'],
      handler: function (e, ctx) {
        navigate(ctx, 'home');
      }
    },
    'reel.open': {
      on: ['click'],
      gkeys: ['reel:open'],
      handler: function (e, ctx) {
        var reelId = e && e.currentTarget ? e.currentTarget.getAttribute('data-reel-id') : null;
        ctx.setState(function (state) {
          var next = Object.assign({}, state);
          next.data = Object.assign({}, state.data);
          if (reelId && next.data.reels) {
            var i;
            for (i = 0; i < next.data.reels.length; i += 1) {
              if (next.data.reels[i].id === reelId) {
                next.data.active_reel = next.data.reels[i];
              }
            }
          }
          next.data.currentScreen = 'reel_detail';
          if (next.data && next.data.activity_log) {
            next.data.activity_log = next.data.activity_log.concat([{ type: 'reel_open', value: reelId, ts: Date.now() }]);
          }
          return next;
        });
      }
    },
    'auth.login': {
      on: ['click'],
      gkeys: ['auth:login'],
      handler: function (e, ctx) {
        navigate(ctx, 'home');
      }
    },
    'auth.register': {
      on: ['click'],
      gkeys: ['auth:register'],
      handler: function (e, ctx) {
        navigate(ctx, 'register');
      }
    },
    'auth.otp': {
      on: ['click'],
      gkeys: ['auth:otp'],
      handler: function (e, ctx) {
        navigate(ctx, 'otp');
      }
    },
    'auth.verify': {
      on: ['click'],
      gkeys: ['auth:verify'],
      handler: function (e, ctx) {
        navigate(ctx, 'home');
      }
    },
    'profile.save': {
      on: ['click'],
      gkeys: ['profile:save'],
      handler: function (e, ctx) {
        navigate(ctx, 'profile');
      }
    },
    'reel.like': {
      on: ['click'],
      gkeys: ['reel:like'],
      handler: function (e, ctx) {
        if (F.logEvent) F.logEvent(ctx, { type: 'reel_like', ts: Date.now() });
      }
    },
    'reel.comment': {
      on: ['click'],
      gkeys: ['reel:comment'],
      handler: function (e, ctx) {
        if (F.logEvent) F.logEvent(ctx, { type: 'reel_comment', ts: Date.now() });
      }
    },
    'reel.save': {
      on: ['click'],
      gkeys: ['reel:save'],
      handler: function (e, ctx) {
        if (F.logEvent) F.logEvent(ctx, { type: 'reel_save', ts: Date.now() });
      }
    }
  };

  return orders;
}));
