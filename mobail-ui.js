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

  function getTag(tagName) {
    if (!tagName) return D.Div;
    var key = tagName.charAt(0).toUpperCase() + tagName.slice(1);
    return D[key] || D.Div;
  }

  function withAttrs(attrs, extra) {
    return Object.assign({}, attrs || {}, extra || {});
  }

  function Tokens() {
    if (M.Head && M.Head.style) {
      M.Head.style({
        id: 'mobail-ui-tokens',
        content: [
          ':root {',
          '  --mishkah-radius-sm: 8px;',
          '  --mishkah-radius-md: 12px;',
          '  --mishkah-radius-lg: 16px;',
          '  --mishkah-radius-xl: 24px;',
          '  --mishkah-shadow-flat: none;',
          '  --mishkah-shadow-raised: 0 4px 16px rgba(15, 23, 42, 0.12);',
          '  --mishkah-shadow-modal: 0 16px 40px rgba(15, 23, 42, 0.24);',
          '  --mishkah-space-4: 4px;',
          '  --mishkah-space-8: 8px;',
          '  --mishkah-space-12: 12px;',
          '  --mishkah-space-16: 16px;',
          '  --mishkah-space-24: 24px;',
          '  --mishkah-space-32: 32px;',
          '  --mishkah-duration-fast: 120ms;',
          '  --mishkah-duration-standard: 220ms;',
          '  --mishkah-duration-modal: 280ms;',
          '  --mishkah-ease-fast: ease-out;',
          '  --mishkah-ease-standard: ease-in-out;',
          '  --mishkah-ease-modal: cubic-bezier(0.2, 0.8, 0.2, 1);',
          '  --mishkah-font-11-size: 11px;',
          '  --mishkah-font-11-line: 16px;',
          '  --mishkah-font-11-weight: 500;',
          '  --mishkah-font-12-size: 12px;',
          '  --mishkah-font-12-line: 18px;',
          '  --mishkah-font-12-weight: 500;',
          '  --mishkah-font-14-size: 14px;',
          '  --mishkah-font-14-line: 20px;',
          '  --mishkah-font-14-weight: 500;',
          '  --mishkah-font-16-size: 16px;',
          '  --mishkah-font-16-line: 24px;',
          '  --mishkah-font-16-weight: 600;',
          '  --mishkah-font-18-size: 18px;',
          '  --mishkah-font-18-line: 26px;',
          '  --mishkah-font-18-weight: 600;',
          '  --mishkah-font-20-size: 20px;',
          '  --mishkah-font-20-line: 28px;',
          '  --mishkah-font-20-weight: 700;',
          '  --mishkah-font-24-size: 24px;',
          '  --mishkah-font-24-line: 32px;',
          '  --mishkah-font-24-weight: 700;',
          '  --mishkah-screen-padding-compact: 16px;',
          '  --mishkah-screen-padding-regular: 24px;',
          '  --mishkah-touch-44: 44px;',
          '  --mishkah-touch-48: 48px;',
          '  --mishkah-app-max-width: 430px;',
          '}',
          '[data-theme="light"] {',
          '  --mishkah-bg: #F6F7FB;',
          '  --mishkah-surface: #FFFFFF;',
          '  --mishkah-surface-2: #F1F5F9;',
          '  --mishkah-text: #0F172A;',
          '  --mishkah-muted: #64748B;',
          '  --mishkah-primary: #2563EB;',
          '  --mishkah-danger: #DC2626;',
          '  --mishkah-success: #16A34A;',
          '  --mishkah-border: #E2E8F0;',
          '  --mishkah-ring: rgba(37, 99, 235, 0.35);',
          '  --mishkah-glass: rgba(255, 255, 255, 0.65);',
          '  --mishkah-glass-strong: rgba(255, 255, 255, 0.82);',
          '  --mishkah-glow: rgba(37, 99, 235, 0.35);',
          '}',
          '[data-theme="dark"] {',
          '  --mishkah-bg: #0B1020;',
          '  --mishkah-surface: #121826;',
          '  --mishkah-surface-2: #1B2333;',
          '  --mishkah-text: #E2E8F0;',
          '  --mishkah-muted: #94A3B8;',
          '  --mishkah-primary: #60A5FA;',
          '  --mishkah-danger: #F87171;',
          '  --mishkah-success: #34D399;',
          '  --mishkah-border: #263044;',
          '  --mishkah-ring: rgba(96, 165, 250, 0.4);',
          '  --mishkah-glass: rgba(18, 24, 38, 0.7);',
          '  --mishkah-glass-strong: rgba(18, 24, 38, 0.86);',
          '  --mishkah-glow: rgba(96, 165, 250, 0.4);',
          '}',
          '.ui-app-root {',
          '  min-height: 100vh;',
          '  background: var(--mishkah-bg);',
          '  color: var(--mishkah-text);',
          '  font-family: "Inter", system-ui, -apple-system, sans-serif;',
          '  max-width: var(--mishkah-app-max-width);',
          '  margin: 0 auto;',
          '}',
          '.ui-app-root[data-density="compact"] {',
          '  --mishkah-screen-padding: var(--mishkah-screen-padding-compact);',
          '}',
          '.ui-app-root[data-density="regular"], .ui-app-root:not([data-density]) {',
          '  --mishkah-screen-padding: var(--mishkah-screen-padding-regular);',
          '}',
          '.ui-app-shell {',
          '  min-height: 100vh;',
          '  display: flex;',
          '  flex-direction: column;',
          '}',
          '.ui-top-bar {',
          '  height: 56px;',
          '  padding: var(--mishkah-space-12) var(--mishkah-screen-padding);',
          '  display: flex;',
          '  align-items: center;',
          '  justify-content: space-between;',
          '  gap: var(--mishkah-space-12);',
          '  background: var(--mishkah-glass);',
          '  backdrop-filter: blur(18px);',
          '  border-bottom: 1px solid var(--mishkah-border);',
          '}',
          '.ui-bottom-nav {',
          '  height: 64px;',
          '  padding: var(--mishkah-space-8) var(--mishkah-space-12);',
          '  padding-bottom: calc(var(--mishkah-space-8) + env(safe-area-inset-bottom));',
          '  display: flex;',
          '  align-items: center;',
          '  justify-content: space-around;',
          '  background: var(--mishkah-surface);',
          '  border-top: 1px solid var(--mishkah-border);',
          '  position: sticky;',
          '  bottom: 0;',
          '  z-index: 10;',
          '  backdrop-filter: blur(18px);',
          '  background: var(--mishkah-glass);',
          '}',
          '.ui-tab-bar, .ui-segmented {',
          '  display: flex;',
          '  gap: var(--mishkah-space-8);',
          '  align-items: center;',
          '}',
          '.ui-segmented {',
          '  padding: 4px;',
          '  background: var(--mishkah-surface-2);',
          '  border-radius: var(--mishkah-radius-lg);',
          '}',
          '.ui-search-bar {',
          '  min-height: 44px;',
          '  background: var(--mishkah-glass-strong);',
          '  border-radius: var(--mishkah-radius-lg);',
          '  border: 1px solid var(--mishkah-border);',
          '  display: flex;',
          '  align-items: center;',
          '  gap: var(--mishkah-space-8);',
          '  padding: 0 var(--mishkah-space-12);',
          '  backdrop-filter: blur(18px);',
          '}',
          '.ui-screen {',
          '  flex: 1;',
          '  padding: var(--mishkah-space-16) var(--mishkah-screen-padding);',
          '  display: flex;',
          '  flex-direction: column;',
          '  gap: var(--mishkah-space-16);',
          '}',
          '.ui-section {',
          '  display: flex;',
          '  flex-direction: column;',
          '  gap: var(--mishkah-space-12);',
          '}',
          '.ui-card {',
          '  background: var(--mishkah-glass);',
          '  border-radius: var(--mishkah-radius-lg);',
          '  padding: var(--mishkah-space-16);',
          '  border: 1px solid var(--mishkah-border);',
          '  backdrop-filter: blur(18px);',
          '}',
          '.ui-card[data-variant="raised"] {',
          '  box-shadow: var(--mishkah-shadow-raised);',
          '}',
          '.ui-divider {',
          '  height: 1px;',
          '  background: var(--mishkah-border);',
          '}',
          '.ui-list {',
          '  display: flex;',
          '  flex-direction: column;',
          '  gap: var(--mishkah-space-8);',
          '}',
          '.ui-list[data-direction="row"] {',
          '  flex-direction: row;',
          '  overflow-x: auto;',
          '}',
          '.ui-list-item {',
          '  min-height: 56px;',
          '  padding: var(--mishkah-space-12) var(--mishkah-space-16);',
          '  display: flex;',
          '  align-items: center;',
          '  justify-content: space-between;',
          '  gap: var(--mishkah-space-12);',
          '  border-radius: var(--mishkah-radius-lg);',
          '}',
          '.ui-grid {',
          '  display: grid;',
          '  gap: var(--mishkah-space-12);',
          '}',
          '.ui-input {',
          '  width: 100%;',
          '  min-height: 48px;',
          '  border-radius: var(--mishkah-radius-md);',
          '  border: 1px solid var(--mishkah-border);',
          '  padding: 0 var(--mishkah-space-12);',
          '  background: var(--mishkah-surface);',
          '  color: var(--mishkah-text);',
          '}',
          '.ui-input:focus {',
          '  outline: none;',
          '  box-shadow: 0 0 0 3px var(--mishkah-ring);',
          '}',
          '.ui-textarea {',
          '  min-height: 120px;',
          '  padding: var(--mishkah-space-12);',
          '}',
          '.ui-button {',
          '  min-height: 48px;',
          '  padding: 0 var(--mishkah-space-24);',
          '  border-radius: var(--mishkah-radius-xl);',
          '  display: inline-flex;',
          '  align-items: center;',
          '  justify-content: center;',
          '  gap: var(--mishkah-space-8);',
          '  border: none;',
          '  cursor: pointer;',
          '  transition: transform var(--mishkah-duration-fast) var(--mishkah-ease-fast), opacity var(--mishkah-duration-fast) var(--mishkah-ease-fast);',
          '}',
          '.ui-button:hover {',
          '  box-shadow: 0 0 0 3px var(--mishkah-glow);',
          '}',
          '.ui-button:active {',
          '  transform: scale(0.98);',
          '  opacity: 0.9;',
          '}',
          '.ui-button-primary {',
          '  background: var(--mishkah-primary);',
          '  color: #FFFFFF;',
          '  box-shadow: var(--mishkah-shadow-raised);',
          '}',
          '.ui-button-secondary {',
          '  background: var(--mishkah-surface-2);',
          '  color: var(--mishkah-text);',
          '}',
          '.ui-button-ghost {',
          '  background: transparent;',
          '  color: var(--mishkah-text);',
          '}',
          '.ui-icon-button {',
          '  height: 44px;',
          '  width: 44px;',
          '  border-radius: 999px;',
          '  display: inline-flex;',
          '  align-items: center;',
          '  justify-content: center;',
          '  background: var(--mishkah-surface-2);',
          '  border: none;',
          '  transition: transform var(--mishkah-duration-fast) var(--mishkah-ease-fast);',
          '  box-shadow: 0 0 0 0 transparent;',
          '}',
          '.ui-icon-button:hover {',
          '  box-shadow: 0 0 0 3px var(--mishkah-glow);',
          '}',
          '.ui-icon-button:active {',
          '  transform: scale(0.95);',
          '}',
          '.ui-fab {',
          '  height: 56px;',
          '  width: 56px;',
          '  border-radius: 999px;',
          '  background: var(--mishkah-primary);',
          '  color: #FFFFFF;',
          '  box-shadow: var(--mishkah-shadow-raised);',
          '  display: inline-flex;',
          '  align-items: center;',
          '  justify-content: center;',
          '}',
          '.ui-nav-item {',
          '  transition: transform var(--mishkah-duration-fast) var(--mishkah-ease-fast), color var(--mishkah-duration-fast) var(--mishkah-ease-fast);',
          '}',
          '.ui-nav-active {',
          '  color: var(--mishkah-primary);',
          '  transform: translateY(-2px) scale(1.05);',
          '  text-shadow: 0 0 12px var(--mishkah-glow);',
          '}',
          '.ui-chip {',
          '  min-height: 32px;',
          '  padding: 0 var(--mishkah-space-12);',
          '  border-radius: 999px;',
          '  background: var(--mishkah-surface-2);',
          '  color: var(--mishkah-text);',
          '  display: inline-flex;',
          '  align-items: center;',
          '  justify-content: center;',
          '  gap: var(--mishkah-space-8);',
          '}',
          '.ui-toast, .ui-snackbar {',
          '  padding: var(--mishkah-space-12) var(--mishkah-space-16);',
          '  border-radius: var(--mishkah-radius-lg);',
          '  background: var(--mishkah-surface);',
          '  box-shadow: var(--mishkah-shadow-raised);',
          '}',
          '.ui-dialog, .ui-bottom-sheet {',
          '  padding: var(--mishkah-space-24);',
          '  border-radius: var(--mishkah-radius-xl);',
          '  background: var(--mishkah-surface);',
          '  box-shadow: var(--mishkah-shadow-modal);',
          '}',
          '.ui-loader {',
          '  border-radius: 999px;',
          '  border: 3px solid var(--mishkah-surface-2);',
          '  border-top-color: var(--mishkah-primary);',
          '  animation: ui-spin 0.8s linear infinite;',
          '}',
          '@keyframes ui-spin {',
          '  to { transform: rotate(360deg); }',
          '}',
          '.ui-skeleton {',
          '  background: var(--mishkah-surface-2);',
          '  border-radius: var(--mishkah-radius-md);',
          '  animation: ui-pulse 1.6s ease-in-out infinite;',
          '}',
          '@keyframes ui-pulse {',
          '  0%, 100% { opacity: 0.55; }',
          '  50% { opacity: 0.9; }',
          '}',
          '.ui-empty-state, .ui-error-state {',
          '  padding: var(--mishkah-space-24);',
          '  border-radius: var(--mishkah-radius-lg);',
          '  background: var(--mishkah-surface);',
          '  text-align: center;',
          '}',
          '.ui-avatar {',
          '  border-radius: 999px;',
          '  overflow: hidden;',
          '  background: var(--mishkah-surface-2);',
          '  border: 1px solid var(--mishkah-border);',
          '  display: inline-flex;',
          '  align-items: center;',
          '  justify-content: center;',
          '}',
          '.ui-media-thumb {',
          '  width: 100%;',
          '  border-radius: var(--mishkah-radius-lg);',
          '  overflow: hidden;',
          '  background: var(--mishkah-surface-2);',
          '  position: relative;',
          '}',
          '.ui-video-tile {',
          '  border-radius: var(--mishkah-radius-lg);',
          '  overflow: hidden;',
          '  background: var(--mishkah-surface-2);',
          '}',
          '.ui-section-title {',
          '  font-size: var(--mishkah-font-18-size);',
          '  line-height: var(--mishkah-font-18-line);',
          '  font-weight: var(--mishkah-font-18-weight);',
          '}',
          '.ui-text-muted {',
          '  color: var(--mishkah-muted);',
          '}',
          '.ui-text-small {',
          '  font-size: var(--mishkah-font-12-size);',
          '  line-height: var(--mishkah-font-12-line);',
          '  font-weight: var(--mishkah-font-12-weight);',
          '}',
          '.ui-text-body {',
          '  font-size: var(--mishkah-font-14-size);',
          '  line-height: var(--mishkah-font-14-line);',
          '  font-weight: var(--mishkah-font-14-weight);',
          '}',
          '.ui-text-title {',
          '  font-size: var(--mishkah-font-20-size);',
          '  line-height: var(--mishkah-font-20-line);',
          '  font-weight: var(--mishkah-font-20-weight);',
          '}',
          '.ui-text-price {',
          '  font-size: var(--mishkah-font-16-size);',
          '  line-height: var(--mishkah-font-16-line);',
          '  font-weight: var(--mishkah-font-16-weight);',
          '  color: var(--mishkah-primary);',
          '}'
        ].join('\n')
      });
    }
    return null;
  }

  function AppRoot(opts, children) {
    var attrs = (opts && opts.attrs) || {};
    var density = opts && opts.density ? opts.density : 'regular';
    var className = mergeClass('ui-app-root', attrs);
    var merged = withAttrs(attrs, { class: className, 'data-density': density });
    return D.Div({ attrs: merged }, children || []);
  }

  function AppShell(opts, children) {
    var attrs = (opts && opts.attrs) || {};
    var className = mergeClass('ui-app-shell', attrs);
    var merged = withAttrs(attrs, { class: className });
    return D.Div({ attrs: merged }, children || []);
  }

  function TopBar(opts, children) {
    var attrs = (opts && opts.attrs) || {};
    var className = mergeClass('ui-top-bar', attrs);
    var merged = withAttrs(attrs, { class: className });
    return D.Header({ attrs: merged }, children || []);
  }

  function BottomNav(opts, children) {
    var attrs = (opts && opts.attrs) || {};
    var className = mergeClass('ui-bottom-nav', attrs);
    var merged = withAttrs(attrs, { class: className });
    return D.Nav({ attrs: merged }, children || []);
  }

  function TabBar(opts, children) {
    var attrs = (opts && opts.attrs) || {};
    var className = mergeClass('ui-tab-bar', attrs);
    var merged = withAttrs(attrs, { class: className });
    return D.Div({ attrs: merged }, children || []);
  }

  function SegmentedControl(opts, children) {
    var attrs = (opts && opts.attrs) || {};
    var className = mergeClass('ui-segmented', attrs);
    var merged = withAttrs(attrs, { class: className });
    return D.Div({ attrs: merged }, children || []);
  }

  function SearchBar(opts, children) {
    var attrs = (opts && opts.attrs) || {};
    var inputAttrs = (opts && opts.inputAttrs) || {};
    var className = mergeClass('ui-search-bar', attrs);
    var merged = withAttrs(attrs, { class: className });
    var inputClass = mergeClass('ui-text-body', inputAttrs);
    var content = children && children.length ? children : [
      D.Input({ attrs: withAttrs(inputAttrs, { class: inputClass, type: 'search' }) }, [])
    ];
    return D.Div({ attrs: merged }, content);
  }

  function Screen(opts, children) {
    var attrs = (opts && opts.attrs) || {};
    var className = mergeClass('ui-screen', attrs);
    var merged = withAttrs(attrs, { class: className });
    return D.Main({ attrs: merged }, children || []);
  }

  function Section(opts, children) {
    var attrs = (opts && opts.attrs) || {};
    var className = mergeClass('ui-section', attrs);
    var merged = withAttrs(attrs, { class: className });
    return D.Section({ attrs: merged }, children || []);
  }

  function Card(opts, children) {
    var attrs = (opts && opts.attrs) || {};
    var variant = opts && opts.variant ? opts.variant : 'flat';
    var className = mergeClass('ui-card', attrs);
    var merged = withAttrs(attrs, { class: className, 'data-variant': variant });
    return D.Div({ attrs: merged }, children || []);
  }

  function DividerHairline(opts) {
    var attrs = (opts && opts.attrs) || {};
    var className = mergeClass('ui-divider', attrs);
    var merged = withAttrs(attrs, { class: className });
    return D.Div({ attrs: merged }, []);
  }

  function List(opts, children) {
    var attrs = (opts && opts.attrs) || {};
    var direction = opts && opts.direction ? opts.direction : 'column';
    var className = mergeClass('ui-list', attrs);
    var merged = withAttrs(attrs, { class: className, 'data-direction': direction === 'row' ? 'row' : 'column' });
    return D.Div({ attrs: merged }, children || []);
  }

  function ListItem(opts, children) {
    var attrs = (opts && opts.attrs) || {};
    var className = mergeClass('ui-list-item', attrs);
    var merged = withAttrs(attrs, { class: className });
    return D.Div({ attrs: merged }, children || []);
  }

  function Grid(opts, children) {
    var attrs = (opts && opts.attrs) || {};
    var columns = opts && opts.columns ? opts.columns : '2';
    var className = mergeClass('ui-grid', attrs);
    var merged = withAttrs(attrs, { class: className, style: 'grid-template-columns: repeat(' + columns + ', minmax(0, 1fr));' });
    return D.Div({ attrs: merged }, children || []);
  }

  function TextField(opts) {
    var attrs = (opts && opts.attrs) || {};
    var className = mergeClass('ui-input ui-text-body', attrs);
    var merged = withAttrs(attrs, { class: className, type: attrs.type || 'text' });
    return D.Input({ attrs: merged }, []);
  }

  function TextArea(opts) {
    var attrs = (opts && opts.attrs) || {};
    var className = mergeClass('ui-input ui-textarea ui-text-body', attrs);
    var merged = withAttrs(attrs, { class: className });
    return D.Textarea({ attrs: merged }, []);
  }

  function Select(opts, children) {
    var attrs = (opts && opts.attrs) || {};
    var className = mergeClass('ui-input ui-text-body', attrs);
    var merged = withAttrs(attrs, { class: className });
    return D.Select({ attrs: merged }, children || []);
  }

  function Switch(opts, children) {
    var attrs = (opts && opts.attrs) || {};
    var className = mergeClass('ui-input ui-text-body', attrs);
    var merged = withAttrs(attrs, { class: className, type: 'checkbox', role: 'switch' });
    return D.Label({}, [
      D.Input({ attrs: merged }, []),
      children || []
    ]);
  }

  function Checkbox(opts, children) {
    var attrs = (opts && opts.attrs) || {};
    var merged = withAttrs(attrs, { type: 'checkbox' });
    return D.Label({}, [
      D.Input({ attrs: merged }, []),
      children || []
    ]);
  }

  function Radio(opts, children) {
    var attrs = (opts && opts.attrs) || {};
    var merged = withAttrs(attrs, { type: 'radio' });
    return D.Label({}, [
      D.Input({ attrs: merged }, []),
      children || []
    ]);
  }

  function Chip(opts, children) {
    var attrs = (opts && opts.attrs) || {};
    var className = mergeClass('ui-chip ui-text-small', attrs);
    var merged = withAttrs(attrs, { class: className });
    return D.Div({ attrs: merged }, children || []);
  }

  function ButtonPrimary(opts, children) {
    var attrs = (opts && opts.attrs) || {};
    var Tag = getTag(opts && opts.as ? opts.as : 'button');
    var className = mergeClass('ui-button ui-button-primary ui-text-body', attrs);
    var merged = withAttrs(attrs, { class: className });
    return Tag({ attrs: merged }, children || []);
  }

  function ButtonSecondary(opts, children) {
    var attrs = (opts && opts.attrs) || {};
    var Tag = getTag(opts && opts.as ? opts.as : 'button');
    var className = mergeClass('ui-button ui-button-secondary ui-text-body', attrs);
    var merged = withAttrs(attrs, { class: className });
    return Tag({ attrs: merged }, children || []);
  }

  function ButtonGhost(opts, children) {
    var attrs = (opts && opts.attrs) || {};
    var Tag = getTag(opts && opts.as ? opts.as : 'button');
    var className = mergeClass('ui-button ui-button-ghost ui-text-body', attrs);
    var merged = withAttrs(attrs, { class: className });
    return Tag({ attrs: merged }, children || []);
  }

  function IconButton(opts, children) {
    var attrs = (opts && opts.attrs) || {};
    var className = mergeClass('ui-icon-button', attrs);
    var merged = withAttrs(attrs, { class: className });
    return D.Button({ attrs: merged }, children || []);
  }

  function FloatingActionButton(opts, children) {
    var attrs = (opts && opts.attrs) || {};
    var className = mergeClass('ui-fab', attrs);
    var merged = withAttrs(attrs, { class: className });
    return D.Button({ attrs: merged }, children || []);
  }

  function Toast(opts, children) {
    var attrs = (opts && opts.attrs) || {};
    var className = mergeClass('ui-toast ui-text-body', attrs);
    var merged = withAttrs(attrs, { class: className });
    return D.Div({ attrs: merged }, children || []);
  }

  function Snackbar(opts, children) {
    var attrs = (opts && opts.attrs) || {};
    var className = mergeClass('ui-snackbar ui-text-body', attrs);
    var merged = withAttrs(attrs, { class: className });
    return D.Div({ attrs: merged }, children || []);
  }

  function Dialog(opts, children) {
    var attrs = (opts && opts.attrs) || {};
    var className = mergeClass('ui-dialog', attrs);
    var merged = withAttrs(attrs, { class: className });
    return D.Div({ attrs: merged }, children || []);
  }

  function BottomSheet(opts, children) {
    var attrs = (opts && opts.attrs) || {};
    var className = mergeClass('ui-bottom-sheet', attrs);
    var merged = withAttrs(attrs, { class: className });
    return D.Div({ attrs: merged }, children || []);
  }

  function Loader(opts) {
    var attrs = (opts && opts.attrs) || {};
    var size = opts && opts.size ? opts.size : 'md';
    var sizePx = size === 'sm' ? 24 : size === 'lg' ? 48 : 32;
    var className = mergeClass('ui-loader', attrs);
    var merged = withAttrs(attrs, { class: className, style: 'width: ' + sizePx + 'px; height: ' + sizePx + 'px;' });
    return D.Div({ attrs: merged }, []);
  }

  function Skeleton(opts) {
    var attrs = (opts && opts.attrs) || {};
    var className = mergeClass('ui-skeleton', attrs);
    var merged = withAttrs(attrs, { class: className });
    return D.Div({ attrs: merged }, []);
  }

  function EmptyState(opts, children) {
    var attrs = (opts && opts.attrs) || {};
    var className = mergeClass('ui-empty-state', attrs);
    var merged = withAttrs(attrs, { class: className });
    return D.Div({ attrs: merged }, children || []);
  }

  function ErrorState(opts, children) {
    var attrs = (opts && opts.attrs) || {};
    var className = mergeClass('ui-error-state', attrs);
    var merged = withAttrs(attrs, { class: className });
    return D.Div({ attrs: merged }, children || []);
  }

  function Avatar(opts, children) {
    var attrs = (opts && opts.attrs) || {};
    var size = opts && opts.size ? opts.size : 'md';
    var sizePx = size === 'sm' ? 32 : size === 'lg' ? 64 : 48;
    var className = mergeClass('ui-avatar', attrs);
    var merged = withAttrs(attrs, { class: className, style: 'width: ' + sizePx + 'px; height: ' + sizePx + 'px;' });
    return D.Div({ attrs: merged }, children || []);
  }

  function MediaThumb(opts, children) {
    var attrs = (opts && opts.attrs) || {};
    var className = mergeClass('ui-media-thumb', attrs);
    var merged = withAttrs(attrs, { class: className });
    return D.Div({ attrs: merged }, children || []);
  }

  function Carousel(opts, children) {
    var attrs = (opts && opts.attrs) || {};
    var className = mergeClass('ui-list', attrs);
    var merged = withAttrs(attrs, { class: className, 'data-direction': 'row' });
    return D.Div({ attrs: merged }, children || []);
  }

  function VideoTile(opts, children) {
    var attrs = (opts && opts.attrs) || {};
    var className = mergeClass('ui-video-tile', attrs);
    var merged = withAttrs(attrs, { class: className });
    return D.Div({ attrs: merged }, children || []);
  }

  function SectionTitle(opts, children) {
    var attrs = (opts && opts.attrs) || {};
    var className = mergeClass('ui-section-title', attrs);
    var merged = withAttrs(attrs, { class: className });
    return D.Div({ attrs: merged }, children || []);
  }

  function StoryPill(opts, children) {
    var attrs = (opts && opts.attrs) || {};
    var className = mergeClass('flex flex-col items-center gap-2', attrs);
    var merged = withAttrs(attrs, { class: className });
    return D.Div({ attrs: merged }, children || []);
  }

  function ListingCard(opts, children) {
    var attrs = (opts && opts.attrs) || {};
    var className = mergeClass('ui-card', attrs);
    var merged = withAttrs(attrs, { class: className, 'data-variant': 'raised' });
    return D.Div({ attrs: merged }, children || []);
  }

  function ReelTile(opts, children) {
    var attrs = (opts && opts.attrs) || {};
    var className = mergeClass('ui-media-thumb', attrs);
    var merged = withAttrs(attrs, { class: className, style: 'aspect-ratio: 9 / 13;' });
    return D.Div({ attrs: merged }, children || []);
  }

  function Badge(opts, children) {
    var attrs = (opts && opts.attrs) || {};
    var className = mergeClass('ui-chip ui-text-small', attrs);
    var merged = withAttrs(attrs, { class: className, style: 'background: var(--mishkah-surface-2); color: var(--mishkah-primary);' });
    return D.Span({ attrs: merged }, children || []);
  }

  function FilterChips(opts, children) {
    var attrs = (opts && opts.attrs) || {};
    var className = mergeClass('flex gap-2 flex-wrap', attrs);
    var merged = withAttrs(attrs, { class: className });
    return D.Div({ attrs: merged }, children || []);
  }

  function PriceTag(opts, children) {
    var attrs = (opts && opts.attrs) || {};
    var className = mergeClass('ui-text-price', attrs);
    var merged = withAttrs(attrs, { class: className });
    return D.Div({ attrs: merged }, children || []);
  }

  return {
    Tokens: Tokens,
    AppRoot: AppRoot,
    AppShell: AppShell,
    TopBar: TopBar,
    BottomNav: BottomNav,
    TabBar: TabBar,
    SegmentedControl: SegmentedControl,
    SearchBar: SearchBar,
    Screen: Screen,
    Section: Section,
    Card: Card,
    DividerHairline: DividerHairline,
    List: List,
    ListItem: ListItem,
    Grid: Grid,
    TextField: TextField,
    TextArea: TextArea,
    Select: Select,
    Switch: Switch,
    Checkbox: Checkbox,
    Radio: Radio,
    Chip: Chip,
    ButtonPrimary: ButtonPrimary,
    ButtonSecondary: ButtonSecondary,
    ButtonGhost: ButtonGhost,
    IconButton: IconButton,
    FloatingActionButton: FloatingActionButton,
    Toast: Toast,
    Snackbar: Snackbar,
    Dialog: Dialog,
    BottomSheet: BottomSheet,
    Loader: Loader,
    Skeleton: Skeleton,
    EmptyState: EmptyState,
    ErrorState: ErrorState,
    Avatar: Avatar,
    MediaThumb: MediaThumb,
    Carousel: Carousel,
    VideoTile: VideoTile,
    SectionTitle: SectionTitle,
    StoryPill: StoryPill,
    ListingCard: ListingCard,
    ReelTile: ReelTile,
    Badge: Badge,
    FilterChips: FilterChips,
    PriceTag: PriceTag
  };
}));
