# Mishkah Mobile Native UI Specification

This document provides the required Mishkah DSL deliverables in a concise, structured format. All identifiers use English-only names. Localization is handled via keys.

---

## A) Foundations (Tokens)

```js
MishkahDesignSystem({
  tokens: {
    colors: {
      light: {
        bg: '#F6F7FB',
        surface: '#FFFFFF',
        surface2: '#F1F5F9',
        text: '#0F172A',
        muted: '#64748B',
        primary: '#2563EB',
        danger: '#DC2626',
        success: '#16A34A',
        border: '#E2E8F0',
        ring: 'rgba(37, 99, 235, 0.35)'
      },
      dark: {
        bg: '#0B1020',
        surface: '#121826',
        surface2: '#1B2333',
        text: '#E2E8F0',
        muted: '#94A3B8',
        primary: '#60A5FA',
        danger: '#F87171',
        success: '#34D399',
        border: '#263044',
        ring: 'rgba(96, 165, 250, 0.4)'
      }
    },
    radii: { sm: 8, md: 12, lg: 16, xl: 24 },
    elevation: {
      flat: { shadow: 'none' },
      raised: { shadow: '0 4px 16px rgba(15, 23, 42, 0.12)' },
      modal: { shadow: '0 16px 40px rgba(15, 23, 42, 0.24)' }
    },
    typography: {
      size11: { size: 11, line: 16, weight: 500 },
      size12: { size: 12, line: 18, weight: 500 },
      size14: { size: 14, line: 20, weight: 500 },
      size16: { size: 16, line: 24, weight: 600 },
      size18: { size: 18, line: 26, weight: 600 },
      size20: { size: 20, line: 28, weight: 700 },
      size24: { size: 24, line: 32, weight: 700 }
    },
    spacing: { s4: 4, s8: 8, s12: 12, s16: 16, s24: 24, s32: 32 },
    motion: {
      fast: { duration: 120, easing: 'ease-out' },
      standard: { duration: 220, easing: 'ease-in-out' },
      modal: { duration: 280, easing: 'cubic-bezier(0.2, 0.8, 0.2, 1)' }
    },
    layout: {
      safeArea: { top: 'env(safe-area-inset-top)', bottom: 'env(safe-area-inset-bottom)' },
      screenPadding: { compact: 16, regular: 24 }
    }
  }
});
```

---

## B) Component Inventory (Library)

```js
MishkahDesignSystem({
  components: {
    AppShell: {
      props: { theme: 'light|dark', dir: 'ltr|rtl' },
      slots: { topBar: true, content: true, bottomNav: true, overlay: true },
      variants: { density: ['compact', 'regular'] },
      states: ['default'],
      sizes: ['screen'],
      rules: { paddingX: 'layout.screenPadding', safeArea: true },
      accessibility: { ariaLabel: 'app_shell_label_key' }
    },
    TopBar: {
      props: { titleKey: 'i18nKey', leading: 'slot', trailing: 'slot' },
      slots: { title: true, leading: true, trailing: true },
      variants: { style: ['flat', 'raised'] },
      states: ['default', 'pressed', 'focused', 'disabled'],
      sizes: ['md'],
      rules: { height: 56, paddingX: 16, paddingY: 12, touchTarget: 44 },
      feedback: { pressed: 'opacity(0.85)' },
      accessibility: { role: 'header', focusRing: 'colors.ring' }
    },
    BottomNav: {
      props: { items: 'schema', activeId: 'id' },
      slots: { item: true },
      variants: { style: ['flat', 'raised'] },
      states: ['default'],
      sizes: ['md'],
      rules: { height: 64, paddingX: 12, safeAreaBottom: true },
      accessibility: { role: 'navigation' }
    },
    TabBar: {
      props: { tabs: 'schema', activeId: 'id' },
      slots: { tab: true },
      variants: { style: ['flat'] },
      states: ['default', 'pressed', 'focused', 'disabled'],
      sizes: ['sm', 'md'],
      rules: { minHeight: 44, gap: 8 },
      feedback: { pressed: 'scale(0.98)' }
    },
    SegmentedControl: {
      props: { segments: 'schema', activeId: 'id' },
      slots: { segment: true },
      variants: { style: ['flat'] },
      states: ['default', 'pressed', 'focused', 'disabled'],
      sizes: ['sm', 'md'],
      rules: { height: 40, padding: 4 },
      feedback: { pressed: 'opacity(0.8)' }
    },
    SearchBar: {
      props: { value: 'string', placeholderKey: 'i18nKey' },
      slots: { leading: true, trailing: true },
      variants: { style: ['flat', 'raised'] },
      states: ['default', 'focused', 'disabled', 'error'],
      sizes: ['md'],
      rules: { height: 44, paddingX: 12, radius: 'lg' },
      accessibility: { labelKey: 'search_label_key' }
    },
    Screen: {
      props: { scroll: 'vertical|none' },
      slots: { content: true },
      variants: { background: ['bg', 'surface'] },
      states: ['default', 'loading', 'error', 'empty'],
      sizes: ['screen'],
      rules: { paddingX: 'layout.screenPadding', paddingY: 16 }
    },
    Section: {
      props: { titleKey: 'i18nKey', action: 'slot' },
      slots: { title: true, action: true, content: true },
      variants: { density: ['compact', 'regular'] },
      states: ['default'],
      sizes: ['md'],
      rules: { gap: 12, paddingY: 8 }
    },
    Card: {
      props: { surface: 'surface|surface2', elevation: 'flat|raised' },
      slots: { header: true, content: true, footer: true },
      variants: { style: ['flat', 'raised'] },
      states: ['default', 'pressed', 'focused', 'disabled', 'loading', 'error', 'success'],
      sizes: ['md', 'lg'],
      rules: { radius: 'lg', padding: 16, touchTarget: 44 },
      feedback: { pressed: 'opacity(0.92)' },
      accessibility: { role: 'group' }
    },
    DividerHairline: {
      props: { inset: 'none|leading|full' },
      slots: {},
      variants: { style: ['hairline'] },
      states: ['default'],
      sizes: ['md'],
      rules: { height: 1 }
    },
    List: {
      props: { items: 'schema' },
      slots: { item: true },
      variants: { density: ['compact', 'regular'] },
      states: ['default', 'loading', 'empty', 'error'],
      sizes: ['md'],
      rules: { gap: 8 }
    },
    ListItem: {
      props: { titleKey: 'i18nKey', subtitleKey: 'i18nKey', leading: 'slot', trailing: 'slot' },
      slots: { leading: true, title: true, subtitle: true, trailing: true },
      variants: { style: ['flat'], disclosure: ['none', 'chevron'] },
      states: ['default', 'pressed', 'focused', 'disabled'],
      sizes: ['md'],
      rules: { minHeight: 56, paddingX: 16, paddingY: 12, touchTarget: 44 },
      feedback: { pressed: 'opacity(0.9)' },
      accessibility: { role: 'listitem' }
    },
    Grid: {
      props: { columns: 'auto', gap: 'spacing' },
      slots: { item: true },
      variants: { density: ['regular'] },
      states: ['default'],
      sizes: ['md'],
      rules: { gap: 12 }
    },
    TextField: {
      props: { value: 'string', labelKey: 'i18nKey', helperKey: 'i18nKey' },
      slots: { leading: true, trailing: true },
      variants: { style: ['flat', 'raised'] },
      states: ['default', 'focused', 'disabled', 'loading', 'error', 'success'],
      sizes: ['md'],
      rules: { height: 48, paddingX: 12, radius: 'md', touchTarget: 48 },
      feedback: { focused: 'ring(colors.ring)' },
      accessibility: { labelKey: 'field_label_key' }
    },
    TextArea: {
      props: { value: 'string', labelKey: 'i18nKey', helperKey: 'i18nKey' },
      slots: {},
      variants: { style: ['flat', 'raised'] },
      states: ['default', 'focused', 'disabled', 'loading', 'error', 'success'],
      sizes: ['md'],
      rules: { minHeight: 120, padding: 12, radius: 'md', touchTarget: 48 }
    },
    Select: {
      props: { value: 'object', labelKey: 'i18nKey', placeholderKey: 'i18nKey' },
      slots: { leading: true, trailing: true },
      variants: { style: ['flat', 'raised'] },
      states: ['default', 'focused', 'disabled', 'loading', 'error', 'success'],
      sizes: ['md'],
      rules: { height: 48, paddingX: 12, radius: 'md', touchTarget: 48 },
      feedback: { pressed: 'opacity(0.9)' }
    },
    Switch: {
      props: { checked: 'boolean', labelKey: 'i18nKey' },
      slots: { label: true },
      variants: { style: ['flat'] },
      states: ['default', 'focused', 'disabled', 'loading', 'error', 'success'],
      sizes: ['md'],
      rules: { width: 48, height: 28, touchTarget: 44 }
    },
    Checkbox: {
      props: { checked: 'boolean', labelKey: 'i18nKey' },
      slots: { label: true },
      variants: { style: ['flat'] },
      states: ['default', 'focused', 'disabled', 'loading', 'error', 'success'],
      sizes: ['md'],
      rules: { box: 20, touchTarget: 44 }
    },
    Radio: {
      props: { checked: 'boolean', labelKey: 'i18nKey' },
      slots: { label: true },
      variants: { style: ['flat'] },
      states: ['default', 'focused', 'disabled', 'loading', 'error', 'success'],
      sizes: ['md'],
      rules: { box: 20, touchTarget: 44 }
    },
    Chip: {
      props: { labelKey: 'i18nKey', selected: 'boolean' },
      slots: { leading: true, trailing: true },
      variants: { style: ['flat', 'raised'] },
      states: ['default', 'pressed', 'focused', 'disabled'],
      sizes: ['sm', 'md'],
      rules: { minHeight: 32, paddingX: 12, radius: 'xl' },
      feedback: { pressed: 'opacity(0.85)' }
    },
    ButtonPrimary: {
      props: { labelKey: 'i18nKey', icon: 'slot' },
      slots: { leading: true, label: true, trailing: true },
      variants: { style: ['raised'] },
      states: ['default', 'pressed', 'focused', 'disabled', 'loading'],
      sizes: ['sm', 'md', 'lg'],
      rules: { minHeight: 48, paddingX: 20, radius: 'xl', touchTarget: 48 },
      feedback: { pressed: 'scale(0.98)' },
      accessibility: { role: 'button' }
    },
    ButtonSecondary: {
      props: { labelKey: 'i18nKey' },
      slots: { label: true },
      variants: { style: ['flat'] },
      states: ['default', 'pressed', 'focused', 'disabled', 'loading'],
      sizes: ['sm', 'md', 'lg'],
      rules: { minHeight: 48, paddingX: 20, radius: 'xl', touchTarget: 48 },
      feedback: { pressed: 'opacity(0.9)' }
    },
    ButtonGhost: {
      props: { labelKey: 'i18nKey' },
      slots: { label: true },
      variants: { style: ['flat'] },
      states: ['default', 'pressed', 'focused', 'disabled', 'loading'],
      sizes: ['sm', 'md', 'lg'],
      rules: { minHeight: 44, paddingX: 16, radius: 'lg', touchTarget: 44 }
    },
    IconButton: {
      props: { labelKey: 'i18nKey', icon: 'slot' },
      slots: { icon: true },
      variants: { style: ['flat', 'raised'] },
      states: ['default', 'pressed', 'focused', 'disabled'],
      sizes: ['sm', 'md'],
      rules: { size: 44, radius: 'xl', touchTarget: 44 },
      feedback: { pressed: 'scale(0.95)' },
      accessibility: { role: 'button' }
    },
    FloatingActionButton: {
      props: { labelKey: 'i18nKey', icon: 'slot' },
      slots: { icon: true },
      variants: { style: ['raised'] },
      states: ['default', 'pressed', 'focused', 'disabled', 'loading'],
      sizes: ['md'],
      rules: { size: 56, radius: 'xl', touchTarget: 56 },
      feedback: { pressed: 'scale(0.97)' }
    },
    Toast: {
      props: { messageKey: 'i18nKey', status: 'info|success|error' },
      slots: { leading: true, trailing: true },
      variants: { style: ['raised'] },
      states: ['default'],
      sizes: ['sm'],
      rules: { paddingX: 16, paddingY: 12, radius: 'lg', elevation: 'raised' }
    },
    Snackbar: {
      props: { messageKey: 'i18nKey', action: 'slot' },
      slots: { message: true, action: true },
      variants: { style: ['raised'] },
      states: ['default'],
      sizes: ['md'],
      rules: { paddingX: 16, paddingY: 12, radius: 'lg', elevation: 'raised' }
    },
    Dialog: {
      props: { titleKey: 'i18nKey', messageKey: 'i18nKey' },
      slots: { title: true, content: true, actions: true },
      variants: { style: ['modal'] },
      states: ['default', 'loading', 'error', 'success'],
      sizes: ['md', 'lg'],
      rules: { padding: 24, radius: 'xl', elevation: 'modal' }
    },
    BottomSheet: {
      props: { titleKey: 'i18nKey' },
      slots: { handle: true, content: true, actions: true },
      variants: { style: ['modal'] },
      states: ['default', 'loading', 'error', 'success'],
      sizes: ['md', 'lg'],
      rules: { padding: 24, radius: 'xl', elevation: 'modal', safeAreaBottom: true }
    },
    Loader: {
      props: { size: 'sm|md|lg' },
      slots: {},
      variants: { style: ['flat'] },
      states: ['default'],
      sizes: ['sm', 'md', 'lg'],
      rules: { minSize: 24 }
    },
    Skeleton: {
      props: { shape: 'line|circle|rect' },
      slots: {},
      variants: { style: ['flat'] },
      states: ['default'],
      sizes: ['sm', 'md', 'lg'],
      rules: { radius: 'md' }
    },
    EmptyState: {
      props: { titleKey: 'i18nKey', bodyKey: 'i18nKey', action: 'slot' },
      slots: { title: true, body: true, action: true },
      variants: { style: ['flat'] },
      states: ['default'],
      sizes: ['md'],
      rules: { padding: 24 }
    },
    ErrorState: {
      props: { titleKey: 'i18nKey', bodyKey: 'i18nKey', action: 'slot' },
      slots: { title: true, body: true, action: true },
      variants: { style: ['flat'] },
      states: ['default'],
      sizes: ['md'],
      rules: { padding: 24 }
    },
    Avatar: {
      props: { size: 'sm|md|lg', image: 'string', labelKey: 'i18nKey' },
      slots: { fallback: true },
      variants: { style: ['flat'] },
      states: ['default'],
      sizes: ['sm', 'md', 'lg'],
      rules: { radius: 'xl', border: 'border' }
    },
    MediaThumb: {
      props: { src: 'string', ratio: '1:1|3:4|16:9' },
      slots: { overlay: true },
      variants: { style: ['flat'] },
      states: ['default', 'loading', 'error'],
      sizes: ['md', 'lg'],
      rules: { radius: 'lg' }
    },
    Carousel: {
      props: { items: 'schema', activeIndex: 'number' },
      slots: { item: true, indicator: true },
      variants: { style: ['flat'] },
      states: ['default'],
      sizes: ['md'],
      rules: { gap: 12 }
    },
    VideoTile: {
      props: { src: 'string', titleKey: 'i18nKey' },
      slots: { overlay: true, actions: true },
      variants: { style: ['flat', 'raised'] },
      states: ['default', 'loading', 'error'],
      sizes: ['md', 'lg'],
      rules: { radius: 'lg' }
    }
  }
});
```

---

## C) App-Level Templates (Screens)

```js
MishkahDesignSystem({
  templates: {
    HomeTemplate: {
      layout: ['TopBar', 'StoriesRow', 'FeedList', 'BottomNav'],
      states: {
        loading: ['Skeleton', 'Skeleton', 'Skeleton'],
        empty: ['EmptyState'],
        error: ['ErrorState']
      },
      rules: { paddingX: 16, paddingY: 16, safeArea: true }
    },
    FeedListTemplate: {
      layout: ['TopBar', 'FeedList', 'BottomNav'],
      states: { loading: ['Skeleton'], empty: ['EmptyState'], error: ['ErrorState'] },
      rules: { paddingX: 16, paddingY: 16 }
    },
    DetailsTemplate: {
      layout: ['TopBar', 'MediaHero', 'DetailsSection', 'ActionsRow'],
      states: { loading: ['Skeleton'], empty: ['EmptyState'], error: ['ErrorState'] },
      rules: { paddingX: 16, paddingY: 16, safeArea: true }
    },
    ComposerTemplate: {
      layout: ['TopBar', 'FormSection', 'MediaPicker', 'SubmitBar'],
      states: { loading: ['Skeleton'], error: ['ErrorState'] },
      rules: { paddingX: 16, paddingY: 16, safeArea: true }
    },
    ProfileTemplate: {
      layout: ['TopBar', 'ProfileHeader', 'StatsRow', 'FeedList'],
      states: { loading: ['Skeleton'], empty: ['EmptyState'], error: ['ErrorState'] },
      rules: { paddingX: 16, paddingY: 16 }
    },
    InboxTemplate: {
      layout: ['TopBar', 'SearchBar', 'List', 'BottomNav'],
      states: { loading: ['Skeleton'], empty: ['EmptyState'], error: ['ErrorState'] },
      rules: { paddingX: 16, paddingY: 16 }
    }
  }
});
```

---

## D) Component Mapping

```js
MishkahDesignSystem({
  mapping: {
    StoryPill: {
      component: 'ListItem',
      variants: { disclosure: 'none', style: 'flat' },
      spacing: { gap: 8, paddingY: 8 },
      states: ['default', 'pressed', 'focused', 'disabled']
    },
    ListingCard: {
      component: 'Card',
      variants: { style: 'raised' },
      spacing: { padding: 16, gap: 12 },
      states: ['default', 'pressed', 'focused', 'disabled', 'loading', 'error', 'success']
    },
    ReelTile: {
      component: 'MediaThumb',
      variants: { style: 'flat' },
      spacing: { radius: 'lg' },
      states: ['default', 'loading', 'error']
    },
    Badge: {
      component: 'Chip',
      variants: { style: 'flat' },
      spacing: { paddingX: 8, paddingY: 4 },
      states: ['default', 'pressed', 'focused', 'disabled']
    },
    SectionTitle: {
      component: 'Section',
      variants: { density: 'compact' },
      spacing: { gap: 8 },
      states: ['default']
    },
    FilterChips: {
      component: 'Chip',
      variants: { style: 'raised' },
      spacing: { gap: 8, paddingX: 12 },
      states: ['default', 'pressed', 'focused', 'disabled']
    },
    PriceTag: {
      component: 'Text',
      variants: { style: 'emphasis' },
      spacing: { paddingX: 8, paddingY: 4 },
      states: ['default']
    }
  }
});
```

---

## E) Native-Feel Checklist (Final Gate)

```js
MishkahDesignSystem({
  nativeFeelChecklist: [
    'Typography hierarchy looks mobile',
    'Spacing breathes and follows 8pt grid',
    'Only real CTAs look like buttons',
    'Cards are not web clickable',
    'Consistent elevation levels',
    'Safe areas are respected',
    'Skeleton/empty/error states included',
    'RTL mirroring is correct'
  ]
});
```
