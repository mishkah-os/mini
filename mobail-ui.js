(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], function () { return factory(root, root.Mishkah); });
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory(root, root.Mishkah);
  } else {
    root.MobailUI = factory(root, root.Mishkah);
  }
}(typeof window !== 'undefined' ? window : this, function (global, Mishkah) {
  "use strict";

  var M = Mishkah || global.Mishkah || {};
  var D = M.DSL;

  function mergeClass(baseClass, attrs) {
    var existing = attrs && attrs.class ? attrs.class : '';
    return (baseClass + ' ' + existing).trim();
  }

  function Tokens() {
    // Defines global CSS tokens using Mishkah Head API
    if (M.Head && M.Head.style) {
      M.Head.style({
        id: 'mobail-ui-tokens',
        content: [
          ':root {',
          '  --radius-xl: 24px;',
          '  --radius-lg: 18px;',
          '  --radius-md: 14px;',
          '  --radius-sm: 10px;',
          '  --ring: rgba(56, 189, 248, 0.35);',
          '  --shadow-soft: 0 24px 60px rgba(15, 23, 42, 0.35);',
          '}',
          '[data-theme="light"] {',
          '  --bg: #f6f7fb;',
          '  --surface: #ffffff;',
          '  --surface-2: #f1f5f9;',
          '  --text: #0f172a;',
          '  --muted: #64748b;',
          '  --primary: #0ea5e9;',
          '  --primary-contrast: #ffffff;',
          '  --border: #e2e8f0;',
          '  --chip: #e0f2fe;',
          '}',
          '[data-theme="dark"] {',
          '  --bg: #070b15;',
          '  --surface: #0f172a;',
          '  --surface-2: #111827;',
          '  --text: #e2e8f0;',
          '  --muted: #94a3b8;',
          '  --primary: #38bdf8;',
          '  --primary-contrast: #03131f;',
          '  --border: #1f2937;',
          '  --chip: #0b2940;',
          '}',
          '.mobail-scroll::-webkit-scrollbar {',
          '  width: 0;',
          '  height: 0;',
          '}',
          '.mobail-shadow {',
          '  box-shadow: var(--shadow-soft);',
          '}',
          '.mobail-ring {',
          '  box-shadow: 0 0 0 3px var(--ring);',
          '}',
          '.mobail-glass {',
          '  backdrop-filter: blur(20px);',
          '  background: rgba(15, 23, 42, 0.6);',
          '}',
          '.mobail-card {',
          '  border-radius: var(--radius-lg);',
          '}',
          '.mobail-chip {',
          '  border-radius: 999px;',
          '}',
          '.mobail-phone {',
          '  border-radius: 36px;',
          '}',
          '.mobail-divider {',
          '  height: 1px;',
          '  background: var(--border);',
          '}',
          '.mobail-safe {',
          '  padding-bottom: env(safe-area-inset-bottom);',
          '}',
          '.mobail-primary {',
          '  background: var(--primary);',
          '  color: var(--primary-contrast);',
          '}',
          '.mobail-surface {',
          '  background: var(--surface);',
          '}',
          '.mobail-surface-2 {',
          '  background: var(--surface-2);',
          '}',
          '.mobail-text {',
          '  color: var(--text);',
          '}',
          '.mobail-muted {',
          '  color: var(--muted);',
          '}',
          '.mobail-border {',
          '  border-color: var(--border);',
          '}',
          '.mobail-chip-bg {',
          '  background: var(--chip);',
          '}',
          '.mobail-fab {',
          '  background: linear-gradient(135deg, #10b981 0%, #14b8a6 100%);',
          '  box-shadow: 0 0 20px rgba(16, 185, 129, 0.6), 0 0 40px rgba(16, 185, 129, 0.3);',
          '  transform: translateY(-8px);',
          '}',
          '.mobail-fab:hover {',
          '  box-shadow: 0 0 25px rgba(16, 185, 129, 0.8), 0 0 50px rgba(16, 185, 129, 0.4);',
          '  transform: translateY(-10px) scale(1.05);',
          '}'
        ].join('\n')
      });
    }
    // Return null so nothing renders in the body
    return null;
  }

  function PhoneFrame(opts, children) {
    var attrs = (opts && opts.attrs) || {};
    var className = mergeClass('mobail-phone mobail-shadow border border-[var(--border)] w-full max-w-[420px] mx-auto bg-[var(--bg)]', attrs);
    var merged = Object.assign({}, attrs, { class: className });
    return D.Div({ attrs: merged }, children || []);
  }

  function AppRoot(opts, children) {
    var attrs = (opts && opts.attrs) || {};
    var className = mergeClass('min-h-screen bg-[var(--bg)] text-[var(--text)] max-w-[480px] mx-auto', attrs);
    var merged = Object.assign({}, attrs, { class: className });
    return D.Div({ attrs: merged }, children || []);
  }

  function AppShell(opts, children) {
    var attrs = (opts && opts.attrs) || {};
    var className = mergeClass('flex flex-col h-screen', attrs);
    var merged = Object.assign({}, attrs, { class: className });
    return D.Div({ attrs: merged }, children || []);
  }

  function TopBar(opts, children) {
    var attrs = (opts && opts.attrs) || {};
    var className = mergeClass('px-6 pt-6 pb-4 flex items-center justify-between', attrs);
    var merged = Object.assign({}, attrs, { class: className });
    return D.Div({ attrs: merged }, children || []);
  }

  function IconButton(opts, children) {
    var attrs = (opts && opts.attrs) || {};
    var className = mergeClass('h-11 w-11 flex items-center justify-center rounded-full bg-[var(--surface-2)] text-[var(--text)] active:scale-95 transition-transform', attrs);
    var merged = Object.assign({}, attrs, { class: className });
    return D.Button({ attrs: merged }, children || []);
  }

  function PrimaryButton(opts, children) {
    var attrs = (opts && opts.attrs) || {};
    var className = mergeClass('mobail-primary rounded-full px-5 py-3 text-sm font-semibold active:scale-95 transition-transform shadow-md', attrs);
    var merged = Object.assign({}, attrs, { class: className });
    return D.Button({ attrs: merged }, children || []);
  }

  function SectionTitle(opts, children) {
    var attrs = (opts && opts.attrs) || {};
    var className = mergeClass('text-lg font-bold', attrs);
    var merged = Object.assign({}, attrs, { class: className });
    return D.Div({ attrs: merged }, children || []);
  }

  function StoryPill(opts, children) {
    var attrs = (opts && opts.attrs) || {};
    var className = mergeClass('flex flex-col items-center gap-2', attrs);
    var merged = Object.assign({}, attrs, { class: className });
    return D.Div({ attrs: merged }, children || []);
  }

  function Avatar(opts, children) {
    var attrs = (opts && opts.attrs) || {};
    var className = mergeClass('h-14 w-14 rounded-full border-2 border-[var(--primary)] p-[2px] flex items-center justify-center bg-[var(--surface)]', attrs);
    var merged = Object.assign({}, attrs, { class: className });
    return D.Div({ attrs: merged }, children || []);
  }

  function Card(opts, children) {
    var attrs = (opts && opts.attrs) || {};
    var className = mergeClass('mobail-card mobail-surface p-5 shadow-lg', attrs);
    var merged = Object.assign({}, attrs, { class: className });
    return D.Div({ attrs: merged }, children || []);
  }

  function MediaThumb(opts) {
    var attrs = (opts && opts.attrs) || {};
    var className = mergeClass('w-full h-48 rounded-[var(--radius-md)] object-cover', attrs);
    var merged = Object.assign({}, attrs, { class: className });
    return D.Img({ attrs: merged }, []);
  }

  function ListingCard(opts, children) {
    var attrs = (opts && opts.attrs) || {};
    var className = mergeClass('mobail-card mobail-surface p-5 flex flex-col gap-4 shadow-lg', attrs);
    var merged = Object.assign({}, attrs, { class: className });
    return D.Div({ attrs: merged }, children || []);
  }

  function Badge(opts, children) {
    var attrs = (opts && opts.attrs) || {};
    var className = mergeClass('mobail-chip mobail-chip-bg px-3 py-1 text-xs font-semibold text-[var(--primary)]', attrs);
    var merged = Object.assign({}, attrs, { class: className });
    return D.Span({ attrs: merged }, children || []);
  }

  function BottomNav(opts, children) {
    var attrs = (opts && opts.attrs) || {};
    var className = mergeClass('mobail-safe mt-auto border-t border-[var(--border)] px-4 py-3 flex items-center justify-around bg-[var(--surface)]', attrs);
    var merged = Object.assign({}, attrs, { class: className });
    return D.Nav({ attrs: merged }, children || []);
  }

  function NavItem(opts, children) {
    var attrs = (opts && opts.attrs) || {};
    var isActive = opts && opts.active;
    var baseClass = 'flex flex-col items-center gap-1 text-xs transition-all duration-200';
    var activeClass = isActive ? 'text-[var(--primary)] scale-125 font-bold' : 'mobail-muted';
    var className = mergeClass(baseClass + ' ' + activeClass, attrs);
    var merged = Object.assign({}, attrs, { class: className });
    return D.Button({ attrs: merged }, children || []);
  }

  function FloatingActionButton(opts, children) {
    var attrs = (opts && opts.attrs) || {};
    var baseClass = 'mobail-fab relative h-14 w-14 rounded-full flex items-center justify-center transition-all duration-300 border-4 border-[var(--surface)]';
    var className = mergeClass(baseClass, attrs);
    var merged = Object.assign({}, attrs, { class: className });
    return D.Button({ attrs: merged }, children || []);
  }

  function ReelTile(opts, children) {
    var attrs = (opts && opts.attrs) || {};
    var className = mergeClass('relative rounded-[var(--radius-md)] overflow-hidden aspect-[9/13] border border-[var(--border)]', attrs);
    var merged = Object.assign({}, attrs, { class: className });
    return D.Div({ attrs: merged }, children || []);
  }

  function ReelOverlay(opts, children) {
    var attrs = (opts && opts.attrs) || {};
    var className = mergeClass('absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent p-3 flex flex-col justify-end text-white', attrs);
    var merged = Object.assign({}, attrs, { class: className });
    return D.Div({ attrs: merged }, children || []);
  }

  return {
    Tokens: Tokens,
    AppRoot: AppRoot,
    PhoneFrame: PhoneFrame,
    AppShell: AppShell,
    TopBar: TopBar,
    IconButton: IconButton,
    PrimaryButton: PrimaryButton,
    SectionTitle: SectionTitle,
    StoryPill: StoryPill,
    Avatar: Avatar,
    Card: Card,
    MediaThumb: MediaThumb,
    ListingCard: ListingCard,
    Badge: Badge,
    BottomNav: BottomNav,
    NavItem: NavItem,
    FloatingActionButton: FloatingActionButton,
    ReelTile: ReelTile,
    ReelOverlay: ReelOverlay
  };
}));
