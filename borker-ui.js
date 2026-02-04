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

  // --- SCHEMA DRIVEN RENDERING ---
  // V2 Variables: projects, units, posts, reels, developers

  function renderProjects(db) {
    // Source: 'projects' table from brocker2.json
    var projects = db.data.projects || [];
    var output = [];
    var i;
    for (i = 0; i < projects.length; i += 1) {
      // Schema fields: project_name, status, delivery_date...
      // (Using developer_id to fetch logo if relational data was hydrated, or placeholder)
      output.push(
        UI.ListingCard({}, [
          // Placeholder hero for project
          UI.MediaThumb({}, [
            D.Img({ attrs: { src: 'https://placehold.co/600x400?text=' + (projects[i].project_name || 'Project'), class: 'w-full h-48 object-cover' } }, [])
          ]),
          D.Div({ attrs: { class: 'flex items-center justify-between mt-3' } }, [
            D.Div({ attrs: { class: 'ui-text-body font-semibold' } }, [projects[i].project_name || '']),
            UI.Badge({}, [projects[i].status || 'upcoming'])
          ]),
          D.Div({ attrs: { class: 'ui-text-small ui-text-muted mt-2' } }, [
            // Date formatting could go here
            projects[i].delivery_date || ''
          ]),
          D.Div({ attrs: { class: 'flex items-center justify-between mt-3' } }, [
            UI.ButtonGhost({
              attrs: {
                gkey: 'project:open',
                class: 'ui-text-small',
                'data-project-id': projects[i].id
              }
            }, [F.t(db, 'view_units')])
          ])
        ])
      );
    }
    return UI.List({}, output);
  }

  function renderUnits(db) {
    // Source: 'units' table from brocker2.json
    var units = db.data.units || [];
    var output = [];
    var i;
    for (i = 0; i < units.length; i += 1) {
      // Schema fields: unit_code, price, type, area, bedrooms
      output.push(
        UI.ListingCard({}, [
          // Placeholder for unit
          UI.MediaThumb({}, [
            D.Img({ attrs: { src: 'https://placehold.co/600x400?text=' + (units[i].unit_code || 'Unit'), class: 'w-full h-48 object-cover' } }, [])
          ]),
          D.Div({ attrs: { class: 'flex items-center justify-between mt-3' } }, [
            D.Div({ attrs: { class: 'ui-text-body font-semibold' } }, [units[i].unit_code || '']),
            UI.Badge({}, [units[i].status || 'available'])
          ]),
          D.Div({ attrs: { class: 'ui-text-small ui-text-muted mt-2' } }, [
            (units[i].type || '') + ' • ' + (units[i].area || 0) + 'm² • ' + (units[i].bedrooms || 0) + ' Beds'
          ]),

          D.Div({ attrs: { class: 'flex items-center justify-between mt-3' } }, [
            UI.PriceTag({}, [F.formatPrice({ price: units[i].price })]),
            UI.ButtonGhost({
              attrs: {
                gkey: 'unit:open',
                class: 'ui-text-small',
                'data-unit-id': units[i].id
              }
            }, [F.t(db, 'view_details')])
          ])
        ])
      );
    }
    return UI.List({}, output);
  }

  function renderPosts(db) {
    // Source: 'posts' table
    var posts = db.data.posts || [];
    var output = [];
    var i;
    for (i = 0; i < posts.length; i += 1) {
      // Schema fields: content, created_at
      output.push(
        UI.Card({ variant: 'raised' }, [
          D.Div({ attrs: { class: 'flex items-center gap-3' } }, [
            // Author hydration would trigger here usually
            D.Div({ attrs: { class: 'ui-text-body font-semibold' } }, ['User']),
          ]),
          D.Div({ attrs: { class: 'mt-2 ui-text-body' } }, [posts[i].content || ''])
        ])
      );
    }
    return UI.List({}, output);
  }

  function renderReels(db) {
    // Source: 'reels' table
    var reels = db.data.reels || [];
    var output = [];
    var i;
    for (i = 0; i < reels.length; i += 1) {
      // Schema fields: video_url, caption, likes_count
      output.push(
        UI.ReelTile({ attrs: { gkey: 'reel:open', 'data-reel-id': reels[i].id } }, [
          // Video thumb or video itself
          D.Img({ attrs: { src: 'https://placehold.co/300x500?text=Video', class: 'absolute inset-0 h-full w-full object-cover', alt: reels[i].caption || '' } }, []),
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

      // Projects Section
      UI.Section({}, [
        D.Div({ attrs: { class: 'flex items-center justify-between' } }, [
          UI.SectionTitle({}, [F.t(db, 'featured_projects')]),
        ]),
        renderProjects(db)
      ]),

      // Units Section
      UI.Section({}, [
        D.Div({ attrs: { class: 'flex items-center justify-between' } }, [
          UI.SectionTitle({}, [F.t(db, 'latest_units')]),
        ]),
        renderUnits(db)
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

  function renderBottomNav(db) {
    // Schema Driven Nav could come from 'ui_labels' or 'app_settings' if advanced
    var current = db.ui ? db.ui.activeView : 'home';
    var items = [
      { id: 'home', icon: '🏠', label_key: 'nav_home' },
      { id: 'reels', icon: '🎬', label_key: 'nav_reels' },
      { id: 'profile', icon: '👤', label_key: 'nav_profile' }
    ];

    var nodes = [];
    var i;
    for (i = 0; i < items.length; i += 1) {
      var isActive = current === items[i].id;
      nodes.push(
        UI.ButtonGhost({
          attrs: {
            gkey: 'nav:' + items[i].id,
            class: 'flex flex-col items-center gap-1 min-w-[60px] ui-nav-item ' + (isActive ? 'ui-nav-active' : 'ui-text-muted')
          }
        }, [
          D.Div({ attrs: { class: 'text-lg' } }, [items[i].icon]),
          D.Div({ attrs: { class: 'ui-text-small' } }, [F.t(db, items[i].label_key)])
        ])
      );
    }
    return UI.BottomNav({}, nodes);
  }

  function body(db) {
    var currentScreen = (db.ui && db.ui.activeView) || 'home';
    var screenContent;

    if (currentScreen === 'reels') {
      screenContent = renderReelsScreen(db);
    } else {
      screenContent = renderHomeScreen(db);
    }

    // App Settings from Schema
    var brandName = 'Aqar Pro';
    if (db.data.app_settings && db.data.app_settings[0]) {
      brandName = db.data.app_settings[0].brand_name || brandName;
    }

    return UI.AppRoot({ attrs: { 'data-theme': 'dark', dir: 'rtl' }, density: 'regular' }, [
      UI.Tokens(),
      UI.AppShell({}, [
        UI.TopBar({}, [
          D.Div({ attrs: { class: 'ui-text-title' } }, [brandName]),
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
