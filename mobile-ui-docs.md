# Mishkah Mobile UI Documentation

هذه الوثيقة توضح عناصر نظام الواجهة الموبايل المبني على Mishkah DSL، مع شرح دور كل عنصر وكيفية استخدامه.

> **مبدأ أساسي**
> جميع النصوص تأتي من `i18n` عبر مفاتيح، وجميع العلاقات والبيانات تأتي جاهزة من الـ backend في شكل موحّد.

---

## Foundations (Tokens)

### Colors
- `bg`, `surface`, `surface2`, `text`, `muted`, `primary`, `danger`, `success`, `border`, `ring`.
- تستخدم للتحكم في ثيم Light/Dark.

### Radii
- `sm`, `md`, `lg`, `xl` لزوايا دائرية متدرجة.

### Elevation
- `flat`, `raised`, `modal` للظل والعمق.

### Typography
- مقاسات 11/12/14/16/18/20/24 مع line-height مناسب.

### Spacing
- شبكة 8pt: 4/8/12/16/24/32.

### Motion
- `fast`, `standard`, `modal` للتوقيت والتسارع.

### Layout
- `safeArea` و `screenPadding` لضبط المسافات الآمنة.

---

## Components

### AppShell
**المسؤولية:** الهيكل الأساسي للتطبيق.
**الاستخدام:** يلف TopBar + Screen + BottomNav.

### TopBar
**المسؤولية:** شريط علوي مع عنوان وإجراءات.
**الاستخدام:** يحتوي على عنوان التطبيق + أزرار النظام.

### BottomNav
**المسؤولية:** تنقل سفلي.
**الاستخدام:** تمرير عناصر التنقل من البيانات (nav_items).

### TabBar / SegmentedControl
**المسؤولية:** تبديل مجموعات أو فلاتر.
**الاستخدام:** يُستخدم عندما تحتاج تقسيم الأقسام.

### SearchBar
**المسؤولية:** البحث.
**الاستخدام:** `SearchBar({ inputAttrs: { placeholder: t('search_placeholder') } })`.

### Screen
**المسؤولية:** مساحة المحتوى الأساسية لكل شاشة.
**الاستخدام:** يضم Sections متعددة.

### Section
**المسؤولية:** مجموعة محتوى مع عنوان وعناصر داخلية.

### Card
**المسؤولية:** سطح محتوى منفصل.
**الاستخدام:** `Card({ variant: 'raised' })` للبطاقات الأساسية.

### DividerHairline
**المسؤولية:** خط فاصل بسيط.

### List / ListItem
**المسؤولية:** عرض عناصر كقائمة.
**الاستخدام:** List افتراضي عمودي ويمكن أفقي.

### Grid
**المسؤولية:** توزيع العناصر في شبكة.

### TextField / TextArea / Select
**المسؤولية:** إدخال البيانات.
**الاستخدام:** دمجها في النماذج.

### Switch / Checkbox / Radio
**المسؤولية:** إدخالات اختيار.

### Chip
**المسؤولية:** شارة صغيرة للفلترة أو الحالة.

### ButtonPrimary / ButtonSecondary / ButtonGhost
**المسؤولية:** أزرار الإجراءات مع درجات أولوية.

### IconButton / FloatingActionButton
**المسؤولية:** أزرار أيقونية أو إجراء رئيسي عائم.

### Toast / Snackbar
**المسؤولية:** رسائل قصيرة للمستخدم.

### Dialog / BottomSheet
**المسؤولية:** حوارات أو شيت سفلي.

### Loader / Skeleton
**المسؤولية:** حالات تحميل.

### EmptyState / ErrorState
**المسؤولية:** حالات فراغ أو خطأ.

### Avatar
**المسؤولية:** صورة مستخدم أو حروف مختصرة.

### MediaThumb
**المسؤولية:** عرض صورة أو فيديو مصغّر.

### Carousel
**المسؤولية:** تمرير أفقي لعناصر متعددة.

### VideoTile
**المسؤولية:** عرض فيديو أو محتوى مرئي.

---

## Component Mapping (Domain Components)

### StoryPill
**التركيب:** Avatar + اسم مختصر.
**الاستخدام:** قائمة القصص.

### ListingCard
**التركيب:** صورة + عنوان + شارة + سعر + إجراء.
**الاستخدام:** قائمة العقارات المميزة.

### ReelTile
**التركيب:** صورة مع Overlay نصي.
**الاستخدام:** شبكة الريلز.

### Badge
**التركيب:** Chip بنمط Highlight.

### SectionTitle
**التركيب:** عنوان قسم واضح.

### FilterChips
**التركيب:** مجموعة Chips للفلترة.

### PriceTag
**التركيب:** نص سعر بلون Primary.

---

## Usage Examples

### Stories
```js
UI.Section({}, [
  UI.SectionTitle({}, [t('stories')]),
  UI.List({ direction: 'row' }, stories)
])
```

### Listing Card
```js
UI.ListingCard({}, [
  UI.MediaThumb({}, [D.Img({ attrs: { src: listing.primary_media.media_url } }, [])]),
  UI.PriceTag({}, [formatPrice(listing)])
])
```

### Empty Inbox
```js
UI.EmptyState({}, [
  D.Div({}, [t('inbox_empty_title')]),
  D.Div({}, [t('inbox_empty_body')])
])
```

---

## Notes
- جميع النصوص تأتي من `i18n` باستخدام `t(key)`.
- العلاقات يتم عرضها مباشرة من كائنات FK مثل `owner` و `primary_media`.
- يدعم Light/Dark و RTL/LTR تلقائياً.
