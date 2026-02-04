window.db = {
  "data": {
    "seed_version": "2026-02-10",
    "currentScreen": "home",
    "demo_accounts": [
      { "id": "demo-office", "role": "office", "code": "123456" },
      { "id": "demo-user", "role": "user", "code": "123456" }
    ],
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
    "activity_log": [],
    "forms": {
      "login": {
        "title_key": "login_title",
        "fields": [
          { "id": "phone", "input_type": "text", "placeholder_key": "login_phone_placeholder" },
          { "id": "password", "input_type": "password", "placeholder_key": "login_password_placeholder" }
        ]
      },
      "register": {
        "title_key": "register_title",
        "fields": [
          { "id": "full_name", "input_type": "text", "placeholder_key": "register_name_placeholder" },
          { "id": "phone", "input_type": "text", "placeholder_key": "register_phone_placeholder" },
          {
            "id": "role",
            "component": "select",
            "options": [
              { "id": "office", "label_key": "role_office" },
              { "id": "user", "label_key": "role_user" }
            ]
          }
        ]
      },
      "otp": {
        "title_key": "otp_title",
        "fields": [
          { "id": "otp", "input_type": "text", "placeholder_key": "otp_placeholder" }
        ]
      },
      "profile": {
        "title_key": "profile_edit_title",
        "fields": [
          { "id": "display_name", "input_type": "text", "placeholder_key": "profile_name_placeholder" },
          { "id": "bio", "component": "textarea", "placeholder_key": "profile_bio_placeholder" },
          { "id": "city", "input_type": "text", "placeholder_key": "profile_city_placeholder" },
          { "id": "logo", "input_type": "text", "placeholder_key": "profile_logo_placeholder" }
        ]
      },
      "listing": {
        "title_key": "listing_form_title",
        "fields": [
          { "id": "headline", "input_type": "text", "placeholder_key": "listing_headline_placeholder" },
          { "id": "description", "component": "textarea", "placeholder_key": "listing_description_placeholder" },
          { "id": "price", "input_type": "number", "placeholder_key": "listing_price_placeholder" },
          { "id": "city", "input_type": "text", "placeholder_key": "listing_city_placeholder" },
          {
            "id": "type",
            "component": "select",
            "options": [
              { "id": "rent", "label_key": "filter_rent" },
              { "id": "sale", "label_key": "filter_sale" }
            ]
          }
        ]
      }
    },
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
        "gallery": [
          { "id": "g1", "media_url": "data:image/gif;base64,R0lGODlhAQABAAAAACw=", "label": "cover" },
          { "id": "g2", "media_url": "data:image/gif;base64,R0lGODlhAQABAAAAACw=", "label": "living" }
        ],
        "location": {
          "id": "b1111111-1111-1111-1111-111111111111",
          "formatted_address": "New Cairo, Egypt",
          "lat": 30.0123,
          "lng": 31.4289
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
        "gallery": [
          { "id": "g3", "media_url": "data:image/gif;base64,R0lGODlhAQABAAAAACw=", "label": "garden" },
          { "id": "g4", "media_url": "data:image/gif;base64,R0lGODlhAQABAAAAACw=", "label": "front" }
        ],
        "location": {
          "id": "b2222222-2222-2222-2222-222222222222",
          "formatted_address": "Nasr City, Egypt",
          "lat": 30.0501,
          "lng": 31.3456
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
          "media_thumbnail_url": "data:image/gif;base64,R0lGODlhAQABAAAAACw=",
          "binary_base64": "AA=="
        },
        "status": "active",
        "created_at": "2026-02-01T12:45:00Z",
        "caption": "لقطة ريلز فاخرة لشقة التجمع"
      }
    ],
    "tickets": [
      { "id": "t1", "title": "طلب معاينة شقة التجمع", "status_label": "open" },
      { "id": "t2", "title": "استفسار عن فيلا مدينة نصر", "status_label": "pending" }
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
      "profile_stat_posts": { "ar": "المنشورات", "en": "Posts" },
      "login_title": { "ar": "تسجيل الدخول", "en": "Login" },
      "register_title": { "ar": "إنشاء حساب", "en": "Register" },
      "otp_title": { "ar": "رمز التحقق", "en": "OTP" },
      "login_phone_placeholder": { "ar": "رقم الهاتف", "en": "Phone number" },
      "login_password_placeholder": { "ar": "كلمة المرور", "en": "Password" },
      "register_name_placeholder": { "ar": "الاسم الكامل", "en": "Full name" },
      "register_phone_placeholder": { "ar": "رقم الهاتف", "en": "Phone number" },
      "otp_placeholder": { "ar": "ادخل رمز 123456", "en": "Enter 123456" },
      "role_office": { "ar": "مكتب عقارات", "en": "Office" },
      "role_user": { "ar": "مستخدم", "en": "User" },
      "login": { "ar": "دخول", "en": "Login" },
      "register": { "ar": "تسجيل", "en": "Register" },
      "continue": { "ar": "متابعة", "en": "Continue" },
      "verify": { "ar": "تأكيد", "en": "Verify" },
      "edit_profile": { "ar": "تعديل الملف", "en": "Edit profile" },
      "save_changes": { "ar": "حفظ التغييرات", "en": "Save changes" },
      "profile_edit_title": { "ar": "تعديل الملف الشخصي", "en": "Edit profile" },
      "profile_name_placeholder": { "ar": "اسم العرض", "en": "Display name" },
      "profile_bio_placeholder": { "ar": "نبذة قصيرة", "en": "Short bio" },
      "profile_city_placeholder": { "ar": "المدينة", "en": "City" },
      "profile_logo_placeholder": { "ar": "رابط الشعار (Base64)", "en": "Logo base64" },
      "listing_form_title": { "ar": "إنشاء إعلان", "en": "Create listing" },
      "listing_headline_placeholder": { "ar": "عنوان الإعلان", "en": "Listing title" },
      "listing_description_placeholder": { "ar": "وصف الإعلان", "en": "Listing description" },
      "listing_price_placeholder": { "ar": "السعر", "en": "Price" },
      "listing_city_placeholder": { "ar": "المدينة", "en": "City" },
      "publish_listing": { "ar": "نشر الإعلان", "en": "Publish listing" },
      "view_details": { "ar": "عرض التفاصيل", "en": "View details" },
      "listing_location": { "ar": "الموقع", "en": "Location" },
      "request_listing": { "ar": "طلب معاينة", "en": "Request visit" },
      "office_dashboard": { "ar": "لوحة المكتب", "en": "Office dashboard" },
      "reel_title": { "ar": "تفاصيل الريل", "en": "Reel details" },
      "like": { "ar": "إعجاب", "en": "Like" },
      "comment": { "ar": "تعليق", "en": "Comment" },
      "save": { "ar": "حفظ", "en": "Save" }
    }
  }
};
