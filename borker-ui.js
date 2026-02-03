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
    var items = db.data.users || [];
    var list = [];
    var i;
    for (i = 0; i < items.length; i += 1) {
      list.push(
        UI.StoryPill({}, [
          UI.Avatar({ size: 'md' }, [
            D.Img({ attrs: { src: items[i].avatar_url || '', class: 'h-full w-full object-cover', alt: items[i].display_name || '' } }, [])
          ]),
          D.Div({ attrs: { class: 'ui-text-small ui-text-muted text-center max-w-[88px]' } }, [items[i].display_name || ''])
        ])
      );
    }
    return UI.List({ direction: 'row', attrs: { class: 'pb-2' } }, list);
  }

  function renderFilters(db) {
    var filters = db.data.filters || [];
    var output = [];
    var i;
    for (i = 0; i < filters.length; i += 1) {
      output.push(
        UI.Chip({}, [F.t(db, filters[i].label_key)])
      );
    }
    return UI.FilterChips({}, output);
  }

  function renderListings(db) {
    var listings = db.data.listings || [];
    var output = [];
    var i;
    for (i = 0; i < listings.length; i += 1) {
      output.push(
        UI.ListingCard({}, [
          UI.MediaThumb({}, [
            D.Img({ attrs: { src: listings[i].primary_media.media_url || '', class: 'w-full h-48 object-cover', alt: listings[i].headline || '' } }, [])
          ]),
          D.Div({ attrs: { class: 'flex items-center justify-between mt-3' } }, [
            D.Div({ attrs: { class: 'ui-text-body font-semibold' } }, [listings[i].headline || '']),
            UI.Badge({}, [F.t(db, listings[i].listing_type_key || '')])
          ]),
          D.Div({ attrs: { class: 'ui-text-small ui-text-muted mt-2' } }, [listings[i].excerpt || '']),
          D.Div({ attrs: { class: 'flex items-center justify-between mt-3' } }, [
            UI.PriceTag({}, [F.formatPrice(listings[i])]),
            UI.ButtonGhost({ as: 'a', attrs: { href: 'tel:' + (listings[i].owner.phone || ''), class: 'ui-text-small' } }, [F.t(db, 'call_now')])
          ])
        ])
      );
    }
    return UI.List({}, output);
  }

  function renderPosts(db) {
    var posts = db.data.posts || [];
    var output = [];
    var i;
    for (i = 0; i < posts.length; i += 1) {
      output.push(
        UI.Card({ variant: 'raised' }, [
          D.Div({ attrs: { class: 'flex items-center gap-3' } }, [
            UI.Avatar({ size: 'sm' }, [
              D.Div({ attrs: { class: 'ui-text-small font-semibold' } }, [posts[i].owner.display_name ? posts[i].owner.display_name.slice(0, 2) : ''])
            ]),
            D.Div({}, [
              D.Div({ attrs: { class: 'ui-text-body font-semibold' } }, [posts[i].owner.display_name || '']),
              D.Div({ attrs: { class: 'ui-text-small ui-text-muted' } }, [posts[i].caption || ''])
            ])
          ]),
          UI.MediaThumb({ attrs: { class: 'mt-3' } }, [
            D.Img({ attrs: { class: 'w-full h-48 object-cover', src: posts[i].media.media_url || '', alt: posts[i].caption || '' } }, [])
          ])
        ])
      );
    }
    return UI.List({}, output);
  }

  function renderReels(db) {
    var reels = db.data.reels || [];
    var output = [];
    var i;
    for (i = 0; i < reels.length; i += 1) {
      output.push(
        UI.ReelTile({}, [
          D.Img({ attrs: { src: reels[i].media.media_thumbnail_url || reels[i].media.media_url || '', class: 'absolute inset-0 h-full w-full object-cover', alt: reels[i].caption || '' } }, []),
          D.Div({ attrs: { class: 'absolute inset-0 flex items-end bg-gradient-to-t from-black/70 via-black/20 to-transparent p-3' } }, [
            D.Div({ attrs: { class: 'ui-text-small text-white' } }, [reels[i].caption || ''])
          ])
        ])
      );
    }
    return UI.Grid({ columns: '2' }, output);
  }

  function renderHomeScreen(db) {
    return UI.Screen({ attrs: { class: 'overflow-y-auto' } }, [
      UI.SearchBar({ inputAttrs: { placeholder: F.t(db, 'search_placeholder'), class: 'w-full bg-transparent outline-none ui-text-body' } }),
      UI.Section({}, [
        D.Div({ attrs: { class: 'flex items-center justify-between' } }, [
          UI.SectionTitle({}, [F.t(db, 'stories')]),
          D.Div({ attrs: { class: 'ui-text-small ui-text-muted' } }, [F.t(db, 'nearby')])
        ]),
        renderStories(db)
      ]),
      UI.Section({}, [
        D.Div({ attrs: { class: 'flex items-center justify-between' } }, [
          UI.SectionTitle({}, [F.t(db, 'featured_listings')]),
          D.Div({ attrs: { class: 'ui-text-small ui-text-muted' } }, [F.t(db, 'view_all')])
        ]),
        renderFilters(db),
        renderListings(db)
      ])
    ]);
  }

  function renderReelsScreen(db) {
    return UI.Screen({ attrs: { class: 'overflow-y-auto' } }, [
      UI.Section({}, [
        UI.SectionTitle({}, [F.t(db, 'reels')]),
        renderReels(db)
      ])
    ]);
  }

  function renderInboxScreen(db) {
    return UI.Screen({ attrs: { class: 'overflow-y-auto' } }, [
      UI.SearchBar({ inputAttrs: { placeholder: F.t(db, 'search_placeholder'), class: 'w-full bg-transparent outline-none ui-text-body' } }),
      UI.EmptyState({}, [
        D.Div({ attrs: { class: 'ui-text-title' } }, [F.t(db, 'inbox_empty_title')]),
        D.Div({ attrs: { class: 'ui-text-body ui-text-muted mt-2' } }, [F.t(db, 'inbox_empty_body')])
      ])
    ]);
  }

  function renderProfileScreen(db) {
    var user = db.data.users && db.data.users.length ? db.data.users[0] : {};
    var stats = db.data.profile_stats || [];
    var statsNodes = [];
    var i;
    for (i = 0; i < stats.length; i += 1) {
      statsNodes.push(
        UI.Card({}, [
          D.Div({ attrs: { class: 'ui-text-title' } }, [stats[i].value || '']),
          D.Div({ attrs: { class: 'ui-text-small ui-text-muted' } }, [F.t(db, stats[i].label_key)])
        ])
      );
    }

    return UI.Screen({ attrs: { class: 'overflow-y-auto' } }, [
      UI.Card({ variant: 'raised' }, [
        D.Div({ attrs: { class: 'flex items-center gap-4' } }, [
          UI.Avatar({ size: 'lg' }, [
            D.Img({ attrs: { src: user.avatar_url || '', class: 'h-full w-full object-cover', alt: user.display_name || '' } }, [])
          ]),
          D.Div({}, [
            D.Div({ attrs: { class: 'ui-text-title' } }, [user.display_name || '']),
            D.Div({ attrs: { class: 'ui-text-body ui-text-muted mt-1' } }, [user.bio || ''])
          ])
        ])
      ]),
      UI.Grid({ columns: '3' }, statsNodes),
      UI.Section({}, [
        UI.SectionTitle({}, [F.t(db, 'latest_posts')]),
        renderPosts(db)
      ])
    ]);
  }

  function renderBottomNav(db) {
    var items = db.data.nav_items || [];
    var current = db.data.currentScreen || 'home';
    var nodes = [];
    var i;
    for (i = 0; i < items.length; i += 1) {
      var isActive = current === items[i].id;
      nodes.push(
        UI.ButtonGhost({
          attrs: {
            gkey: 'nav:' + items[i].id,
            class: 'flex flex-col items-center gap-1 min-w-[60px] ' + (isActive ? 'text-[var(--mishkah-primary)]' : 'ui-text-muted')
          }
        }, [
          D.Div({ attrs: { class: 'text-lg' } }, [items[i].icon || '']),
          D.Div({ attrs: { class: 'ui-text-small' } }, [F.t(db, items[i].label_key)])
        ])
      );
    }
    return UI.BottomNav({}, nodes);
  }

  function body(db) {
    var currentScreen = db.data.currentScreen || 'home';
    var screenContent;

    if (currentScreen === 'reels') {
      screenContent = renderReelsScreen(db);
    } else if (currentScreen === 'inbox') {
      screenContent = renderInboxScreen(db);
    } else if (currentScreen === 'profile') {
      screenContent = renderProfileScreen(db);
    } else {
      screenContent = renderHomeScreen(db);
    }

    return UI.AppRoot({ attrs: { 'data-theme': db.env.theme, dir: db.env.dir }, density: 'regular' }, [
      UI.Tokens(),
      UI.AppShell({}, [
        UI.TopBar({}, [
          D.Div({}, [
            D.Div({ attrs: { class: 'ui-text-small ui-text-muted' } }, [F.t(db, 'app_tagline')]),
            D.Div({ attrs: { class: 'ui-text-title' } }, [F.t(db, 'app_title')])
          ]),
          D.Div({ attrs: { class: 'flex items-center gap-2' } }, [
            UI.IconButton({ attrs: { gkey: 'sys:lang', title: F.t(db, 'toggle_lang') } }, [F.t(db, 'lang_short')]),
            UI.IconButton({ attrs: { gkey: 'sys:theme', title: F.t(db, 'toggle_theme') } }, [F.t(db, 'toggle_theme')])
          ])
        ]),
        screenContent,
        renderBottomNav(db)
      ])
    ]);
  }

  return {
    body: body
  };
}));
