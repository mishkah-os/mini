(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], function () { return factory(root, root.Mishkah, root.MobailUI, root.BrockerFunctions); });
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory(root, root.Mishkah, root.MobailUI, root.BrockerFunctions);
  } else {
    root.BrockerUI = factory(root, root.Mishkah, root.MobailUI, root.BrockerFunctions);
  }
}(typeof window !== 'undefined' ? window : this, function (global, Mishkah, MobailUI, BrockerFunctions) {
  "use strict";

  var M = Mishkah || global.Mishkah || {};
  var D = M.DSL;
  var UI = MobailUI || global.MobailUI;
  var F = BrockerFunctions || global.BrockerFunctions;

  function renderStories(db) {
    var items = db.data.users;
    var list = [];
    var i;
    for (i = 0; i < items.length; i += 1) {
      var userLang = F.getUserLang(db, items[i].id) || {};
      list.push(
        UI.StoryPill({}, [
          UI.Avatar({}, [
            D.Img({ attrs: { src: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=200&auto=format&fit=crop', class: 'h-full w-full rounded-full object-cover' } }, [])
          ]),
          D.Div({ attrs: { class: 'text-xs mobail-muted text-center max-w-[72px]' } }, [userLang.full_name || ''])
        ])
      );
    }
    return D.Div({ attrs: { class: 'flex gap-4 overflow-x-auto mobail-scroll px-6' } }, list);
  }

  function renderListings(db) {
    var listings = db.data.listings;
    var output = [];
    var i;
    for (i = 0; i < listings.length; i += 1) {
      var listingLang = F.getListingLang(db, listings[i].id) || {};
      var media = F.getMedia(db, listings[i].primary_media_id) || {};
      output.push(
        UI.ListingCard({}, [
          UI.MediaThumb({ attrs: { src: media.media_url || '', alt: listingLang.headline || '' } }),
          D.Div({ attrs: { class: 'flex items-center justify-between' } }, [
            D.Div({ attrs: { class: 'text-sm font-semibold' } }, [listingLang.headline || '']),
            UI.Badge({}, [listings[i].listing_type])
          ]),
          D.Div({ attrs: { class: 'text-xs mobail-muted' } }, [listingLang.excerpt || '']),
          D.Div({ attrs: { class: 'flex items-center justify-between' } }, [
            D.Div({ attrs: { class: 'text-sm font-semibold text-[var(--primary)]' } }, [F.formatPrice(listings[i])]),
            D.A({ attrs: { class: 'text-xs mobail-muted underline', href: 'tel:' + (F.getUser(db, listings[i].owner_id) || {}).phone } }, [F.t(db, 'call_now')])
          ])
        ])
      );
    }
    return D.Div({ attrs: { class: 'flex flex-col gap-4' } }, output);
  }

  function renderPosts(db) {
    var posts = db.data.posts;
    var output = [];
    var i;
    for (i = 0; i < posts.length; i += 1) {
      var postLang = F.getPostLang(db, posts[i].id) || {};
      var media = F.getMedia(db, posts[i].media_id) || {};
      var userLang = F.getUserLang(db, posts[i].owner_id) || {};
      output.push(
        UI.Card({}, [
          D.Div({ attrs: { class: 'flex items-center gap-3' } }, [
            D.Div({ attrs: { class: 'h-10 w-10 rounded-full bg-[var(--surface-2)] flex items-center justify-center text-xs font-semibold' } }, [userLang.full_name ? userLang.full_name.slice(0, 2) : ''] ),
            D.Div({}, [
              D.Div({ attrs: { class: 'text-sm font-semibold' } }, [userLang.full_name || '']),
              D.Div({ attrs: { class: 'text-xs mobail-muted' } }, [postLang.caption || ''])
            ])
          ]),
          D.Img({ attrs: { class: 'mt-3 w-full h-48 rounded-[var(--radius-md)] object-cover', src: media.media_url || '', alt: postLang.caption || '' } }, [])
        ])
      );
    }
    return D.Div({ attrs: { class: 'flex flex-col gap-4' } }, output);
  }

  function renderReels(db) {
    var reels = db.data.reels;
    var output = [];
    var i;
    for (i = 0; i < reels.length; i += 1) {
      var reelLang = F.getReelLang(db, reels[i].id) || {};
      var media = F.getMedia(db, reels[i].media_id) || {};
      output.push(
        UI.ReelTile({}, [
          D.Img({ attrs: { src: media.media_thumbnail_url || media.media_url || '', class: 'absolute inset-0 h-full w-full object-cover' } }, []),
          UI.ReelOverlay({}, [
            D.Div({ attrs: { class: 'text-xs font-semibold' } }, [reelLang.caption || ''])
          ])
        ])
      );
    }
    return D.Div({ attrs: { class: 'grid grid-cols-2 gap-3' } }, output);
  }

  function body(db) {
    return UI.AppRoot({ attrs: { 'data-theme': db.env.theme, dir: db.env.dir } }, [
      UI.Tokens(),
      UI.PhoneFrame({}, [
        UI.AppShell({}, [
          UI.TopBar({}, [
            D.Div({}, [
              D.Div({ attrs: { class: 'text-xs uppercase tracking-[0.3em] mobail-muted' } }, [F.t(db, 'app_tagline')]),
              D.Div({ attrs: { class: 'text-xl font-semibold' } }, [F.t(db, 'app_title')])
            ]),
            D.Div({ attrs: { class: 'flex items-center gap-3' } }, [
              UI.IconButton({ attrs: { gkey: 'sys:lang', title: F.t(db, 'toggle_lang') } }, [F.t(db, 'lang_short')]),
              UI.IconButton({ attrs: { gkey: 'sys:theme', title: F.t(db, 'toggle_theme') } }, [D.Span({ attrs: { class: 'text-lg' } }, ['◐'])])
            ])
          ]),
          D.Div({ attrs: { class: 'px-6 flex items-center justify-between' } }, [
            UI.SectionTitle({}, [F.t(db, 'stories')]),
            D.Div({ attrs: { class: 'text-xs mobail-muted' } }, [F.t(db, 'nearby')])
          ]),
          D.Div({ attrs: { class: 'mt-4' } }, [renderStories(db)]),
          D.Div({ attrs: { class: 'px-6 mt-6 flex items-center justify-between' } }, [
            UI.SectionTitle({}, [F.t(db, 'featured_listings')]),
            D.Div({ attrs: { class: 'text-xs mobail-muted' } }, [F.t(db, 'view_all')])
          ]),
          D.Div({ attrs: { class: 'px-6 mt-4 flex flex-col gap-4' } }, [renderListings(db)]),
          D.Div({ attrs: { class: 'px-6 mt-6 flex items-center justify-between' } }, [
            UI.SectionTitle({}, [F.t(db, 'latest_posts')]),
            UI.PrimaryButton({}, [F.t(db, 'add_post')])
          ]),
          D.Div({ attrs: { class: 'px-6 mt-4 flex flex-col gap-4' } }, [renderPosts(db)]),
          D.Div({ attrs: { class: 'px-6 mt-6 flex items-center justify-between' } }, [
            UI.SectionTitle({}, [F.t(db, 'reels')]),
            D.Div({ attrs: { class: 'text-xs mobail-muted' } }, [F.t(db, 'discover')])
          ]),
          D.Div({ attrs: { class: 'px-6 mt-4' } }, [renderReels(db)]),
          UI.BottomNav({}, [
            UI.NavItem({}, [D.Span({ attrs: { class: 'text-base' } }, ['⌂']), D.Span({}, [F.t(db, 'nav_home')])]),
            UI.NavItem({}, [D.Span({ attrs: { class: 'text-base' } }, ['▶']), D.Span({}, [F.t(db, 'nav_reels')])]),
            UI.NavItem({}, [D.Span({ attrs: { class: 'text-base' } }, ['✉']), D.Span({}, [F.t(db, 'nav_inbox')])]),
            UI.NavItem({}, [D.Span({ attrs: { class: 'text-base' } }, ['☺']), D.Span({}, [F.t(db, 'nav_profile')])])
          ])
        ])
      ])
    ]);
  }

  return {
    body: body
  };
}));
