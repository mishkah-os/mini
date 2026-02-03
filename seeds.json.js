window.db = {
  "data": {
    "currentScreen": "home",
    "nav_items": [
      { "id": "home", "label_key": "nav_home", "icon": "🏠" },
      { "id": "reels", "label_key": "nav_reels", "icon": "🎬" },
      { "id": "inbox", "label_key": "nav_inbox", "icon": "💬" },
      { "id": "profile", "label_key": "nav_profile", "icon": "👤" }
    ],
    "filters": [
      { "id": "all", "label_key": "filter_all" },
      { "id": "rent", "label_key": "filter_rent" },
      { "id": "sale", "label_key": "filter_sale" }
    ],
    "profile_stats": [
      { "id": "listings", "label_key": "profile_stat_listings", "value": "3" },
      { "id": "followers", "label_key": "profile_stat_followers", "value": "1.2k" },
      { "id": "posts", "label_key": "profile_stat_posts", "value": "2" }
    ],
    "users": [
      {
        "id": "11111111-1111-1111-1111-111111111111",
        "phone": "+201000000001",
        "status": "active",
        "created_at": "2026-02-01T10:00:00Z",
        "updated_at": "2026-02-01T10:30:00Z",
        "full_name": "كريم الجندي",
        "display_name": "كريم الجندي",
        "bio": "وسيط عقاري متخصص في شقق التجمع",
        "avatar_url": "data:image/gif;base64,R0lGODlhAQABAAAAACw="
      },
      {
        "id": "22222222-2222-2222-2222-222222222222",
        "phone": "+201000000002",
        "status": "active",
        "created_at": "2026-02-01T11:00:00Z",
        "updated_at": "2026-02-01T11:20:00Z",
        "full_name": "سارة شريف",
        "display_name": "سارة شريف",
        "bio": "باحثة عن سكن بواجهة اجتماعية",
        "avatar_url": "data:image/gif;base64,R0lGODlhAQABAAAAACw="
      }
    ],
    "listings": [
      {
        "id": "d1111111-1111-1111-1111-111111111111",
        "owner": {
          "id": "11111111-1111-1111-1111-111111111111",
          "display_name": "كريم الجندي",
          "phone": "+201000000001"
        },
        "primary_media": {
          "id": "c1111111-1111-1111-1111-111111111111",
          "media_url": "data:image/gif;base64,R0lGODlhAQABAAAAACw=",
          "media_thumbnail_url": "data:image/gif;base64,R0lGODlhAQABAAAAACw="
        },
        "location": {
          "id": "b1111111-1111-1111-1111-111111111111",
          "formatted_address": "New Cairo, Egypt"
        },
        "listing_type": "rent",
        "listing_type_key": "filter_rent",
        "price_amount": 18500,
        "currency": "EGP",
        "status": "active",
        "created_at": "2026-02-01T12:20:00Z",
        "updated_at": "2026-02-01T12:30:00Z",
        "headline": "شقة مفروشة في التجمع",
        "excerpt": "دوبلكس فاخر قريب من الخدمات",
        "description": "شقة 3 غرف، مفروشة بالكامل، جاهزة للسكن"
      },
      {
        "id": "d2222222-2222-2222-2222-222222222222",
        "owner": {
          "id": "22222222-2222-2222-2222-222222222222",
          "display_name": "سارة شريف",
          "phone": "+201000000002"
        },
        "primary_media": {
          "id": "c3333333-3333-3333-3333-333333333333",
          "media_url": "data:image/gif;base64,R0lGODlhAQABAAAAACw=",
          "media_thumbnail_url": "data:image/gif;base64,R0lGODlhAQABAAAAACw="
        },
        "location": {
          "id": "b2222222-2222-2222-2222-222222222222",
          "formatted_address": "Nasr City, Egypt"
        },
        "listing_type": "sale",
        "listing_type_key": "filter_sale",
        "price_amount": 2500000,
        "currency": "EGP",
        "status": "active",
        "created_at": "2026-02-01T13:00:00Z",
        "updated_at": "2026-02-01T13:15:00Z",
        "headline": "فيلا للبيع في مدينة نصر",
        "excerpt": "فيلا 4 غرف بحديقة واسعة",
        "description": "فيلا مستقلة بحديقة، موقع ممتاز"
      },
      {
        "id": "d3333333-3333-3333-3333-333333333333",
        "owner": {
          "id": "11111111-1111-1111-1111-111111111111",
          "display_name": "كريم الجندي",
          "phone": "+201000000001"
        },
        "primary_media": {
          "id": "c2222222-2222-2222-2222-222222222222",
          "media_url": "data:image/gif;base64,R0lGODlhAQABAAAAACw=",
          "media_thumbnail_url": "data:image/gif;base64,R0lGODlhAQABAAAAACw="
        },
        "location": {
          "id": "b1111111-1111-1111-1111-111111111111",
          "formatted_address": "New Cairo, Egypt"
        },
        "listing_type": "rent",
        "listing_type_key": "filter_rent",
        "price_amount": 12000,
        "currency": "EGP",
        "status": "active",
        "created_at": "2026-02-01T14:00:00Z",
        "updated_at": "2026-02-01T14:10:00Z",
        "headline": "شقة اقتصادية للإيجار",
        "excerpt": "شقة غرفتين بموقع متميز",
        "description": "شقة مناسبة للعائلات الصغيرة"
      }
    ],
    "posts": [
      {
        "id": "f1111111-1111-1111-1111-111111111111",
        "owner": {
          "id": "22222222-2222-2222-2222-222222222222",
          "display_name": "سارة شريف"
        },
        "media": {
          "id": "c3333333-3333-3333-3333-333333333333",
          "media_url": "data:image/gif;base64,R0lGODlhAQABAAAAACw="
        },
        "status": "active",
        "created_at": "2026-02-01T12:40:00Z",
        "caption": "جولة سريعة في الشقة قبل تسليم المفاتيح"
      },
      {
        "id": "f2222222-2222-2222-2222-222222222222",
        "owner": {
          "id": "11111111-1111-1111-1111-111111111111",
          "display_name": "كريم الجندي"
        },
        "media": {
          "id": "c1111111-1111-1111-1111-111111111111",
          "media_url": "data:image/gif;base64,R0lGODlhAQABAAAAACw="
        },
        "status": "active",
        "created_at": "2026-02-01T13:20:00Z",
        "caption": "وحدة سكنية فاخرة جاهزة للمعاينة"
      }
    ],
    "reels": [
      {
        "id": "h1111111-1111-1111-1111-111111111111",
        "owner": {
          "id": "11111111-1111-1111-1111-111111111111",
          "display_name": "كريم الجندي"
        },
        "media": {
          "id": "c2222222-2222-2222-2222-222222222222",
          "media_url": "data:image/gif;base64,R0lGODlhAQABAAAAACw=",
          "media_thumbnail_url": "data:image/gif;base64,R0lGODlhAQABAAAAACw="
        },
        "status": "active",
        "created_at": "2026-02-01T12:45:00Z",
        "caption": "لقطة ريلز فاخرة لشقة التجمع"
      }
    ]
  },
  "env": {
    "theme": "dark",
    "lang": "ar",
    "dir": "rtl"
  },
  "i18n": {
    "dict": {
      "app_title": { "ar": "بروكر", "en": "Brocker" },
      "app_tagline": { "ar": "شبكة عقارات اجتماعية", "en": "Social Real Estate" },
      "toggle_theme": { "ar": "الوضع", "en": "Theme" },
      "toggle_lang": { "ar": "اللغة", "en": "Language" },
      "lang_short": { "ar": "EN", "en": "AR" },
      "search_placeholder": { "ar": "ابحث عن عقار أو منطقة", "en": "Search listings or locations" },
      "stories": { "ar": "القصص", "en": "Stories" },
      "nearby": { "ar": "قريب منك", "en": "Nearby" },
      "featured_listings": { "ar": "العقارات المميزة", "en": "Featured Listings" },
      "latest_posts": { "ar": "أحدث المنشورات", "en": "Latest Posts" },
      "view_all": { "ar": "عرض الكل", "en": "View All" },
      "add_post": { "ar": "إنشاء", "en": "Compose" },
      "reels": { "ar": "ريلز", "en": "Reels" },
      "discover": { "ar": "استكشف", "en": "Discover" },
      "call_now": { "ar": "اتصل الآن", "en": "Call now" },
      "filter_all": { "ar": "الكل", "en": "All" },
      "filter_rent": { "ar": "إيجار", "en": "Rent" },
      "filter_sale": { "ar": "بيع", "en": "Sale" },
      "nav_home": { "ar": "الرئيسية", "en": "Home" },
      "nav_reels": { "ar": "ريلز", "en": "Reels" },
      "nav_inbox": { "ar": "الرسائل", "en": "Inbox" },
      "nav_profile": { "ar": "الملف", "en": "Profile" },
      "inbox_empty_title": { "ar": "لا توجد رسائل", "en": "No messages yet" },
      "inbox_empty_body": { "ar": "ابدأ محادثة جديدة مع وسطاءك المفضلين.", "en": "Start a new conversation with your favorite brokers." },
      "profile_stat_listings": { "ar": "العقارات", "en": "Listings" },
      "profile_stat_followers": { "ar": "المتابعون", "en": "Followers" },
      "profile_stat_posts": { "ar": "المنشورات", "en": "Posts" }
    }
  }
};
