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

  function getUserLang(db, userId) {
    var i;
    for (i = 0; i < db.data.users_lang.length; i += 1) {
      if (db.data.users_lang[i].users_id === userId && db.data.users_lang[i].lang === db.env.lang) {
        return db.data.users_lang[i];
      }
    }
    for (i = 0; i < db.data.users_lang.length; i += 1) {
      if (db.data.users_lang[i].users_id === userId) {
        return db.data.users_lang[i];
      }
    }
    return null;
  }

  function getListingLang(db, listingId) {
    var i;
    for (i = 0; i < db.data.listings_lang.length; i += 1) {
      if (db.data.listings_lang[i].listings_id === listingId && db.data.listings_lang[i].lang === db.env.lang) {
        return db.data.listings_lang[i];
      }
    }
    for (i = 0; i < db.data.listings_lang.length; i += 1) {
      if (db.data.listings_lang[i].listings_id === listingId) {
        return db.data.listings_lang[i];
      }
    }
    return null;
  }

  function getMedia(db, mediaId) {
    return findById(db.data.media_assets, mediaId);
  }

  function getPostLang(db, postId) {
    var i;
    for (i = 0; i < db.data.posts_lang.length; i += 1) {
      if (db.data.posts_lang[i].posts_id === postId && db.data.posts_lang[i].lang === db.env.lang) {
        return db.data.posts_lang[i];
      }
    }
    for (i = 0; i < db.data.posts_lang.length; i += 1) {
      if (db.data.posts_lang[i].posts_id === postId) {
        return db.data.posts_lang[i];
      }
    }
    return null;
  }

  function getReelLang(db, reelId) {
    var i;
    for (i = 0; i < db.data.reels_lang.length; i += 1) {
      if (db.data.reels_lang[i].reels_id === reelId && db.data.reels_lang[i].lang === db.env.lang) {
        return db.data.reels_lang[i];
      }
    }
    for (i = 0; i < db.data.reels_lang.length; i += 1) {
      if (db.data.reels_lang[i].reels_id === reelId) {
        return db.data.reels_lang[i];
      }
    }
    return null;
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
      return next;
    });
  }

  function toggleLang(ctx) {
    ctx.setState(function (state) {
      var next = Object.assign({}, state);
      next.env = Object.assign({}, state.env);
      next.env.lang = next.env.lang === 'ar' ? 'en' : 'ar';
      next.env.dir = next.env.lang === 'ar' ? 'rtl' : 'ltr';
      return next;
    });
  }

  return {
    t: t,
    getUser: getUser,
    getUserLang: getUserLang,
    getListingLang: getListingLang,
    getPostLang: getPostLang,
    getReelLang: getReelLang,
    getMedia: getMedia,
    formatPrice: formatPrice,
    toggleTheme: toggleTheme,
    toggleLang: toggleLang
  };
}));
