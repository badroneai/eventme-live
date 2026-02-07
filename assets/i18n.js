/**
 * EventMe — i18n Dictionary
 * All UI strings for AR/EN bilingual support.
 */
const I18N = {
  ar: {
    // Global
    siteTitle: "EventMe",
    langLabel: "EN",
    langAriaLabel: "Switch to English",

    // Nav
    navWhat: "ما هي",
    navBenefits: "المزايا",
    navHow: "كيف تعمل",
    navUseCases: "حالات الاستخدام",
    navFaq: "الأسئلة",
    navContact: "تواصل",

    // Hero
    heroTitle: "جدول فعاليتك الذكي",
    heroSubtitle: "اعرض للحضور ما يحدث الآن، وما هو القادم، بواجهة أنيقة تعمل على الجوال وشاشات العرض",
    ctaDemo: "عرض تجريبي",
    ctaContact: "تواصل معنا",

    // What
    whatTitle: "ما هي EventMe؟",
    whatP1: "EventMe هي أداة تفاعلية لعرض الجدول الزمني للفعاليات والمؤتمرات بشكل مباشر. يرى الحضور الجلسة الحالية والقادمة فوراً دون الحاجة لتحميل تطبيق.",
    whatP2: "صُمّمت للعمل على أجهزة الجوال وشاشات العرض الكبيرة في مواقع الفعاليات، مع دعم كامل للعربية والإنجليزية.",

    // Benefits
    benefitsTitle: "المزايا",
    benefitsOrgTitle: "للمنظّمين",
    benefitsOrg: [
      "إعداد سريع بدون تطبيقات أو تنزيلات",
      "تحديث فوري للجدول الزمني",
      "عرض مباشر على شاشات الموقع",
      "دعم كامل للعربية والإنجليزية"
    ],
    benefitsAttTitle: "للحضور",
    benefitsAtt: [
      "معرفة الجلسة الحالية والقادمة فوراً",
      "تصفية حسب القاعة أو المسرح",
      "مشاركة الجدول بسهولة",
      "يعمل من المتصفح مباشرة"
    ],

    // How
    howTitle: "كيف تعمل؟",
    howSteps: [
      { num: "١", title: "أنشئ فعاليتك", desc: "أدخل بيانات الجلسات والمتحدثين والقاعات" },
      { num: "٢", title: "انشر الرابط", desc: "شارك رابط الجدول مع الحضور أو اعرضه على الشاشات" },
      { num: "٣", title: "تابع مباشرة", desc: "يتحدّث الجدول تلقائياً ويعرض الحالة الحالية" }
    ],

    // Use Cases
    useCasesTitle: "حالات الاستخدام",
    useCases: [
      { title: "المؤتمرات", desc: "تتبّع جلسات متعددة عبر قاعات مختلفة مع تحديث لحظي" },
      { title: "المعارض", desc: "وجّه الزوار للعروض والورش والفعاليات الجارية" },
      { title: "الفعاليات متعددة المراحل", desc: "حفلات الافتتاح، ورش العمل، جلسات النقاش في مكان واحد" }
    ],

    // FAQ
    faqTitle: "الأسئلة الشائعة",
    faqs: [
      { q: "هل أحتاج إلى تثبيت تطبيق؟", a: "لا، EventMe يعمل من المتصفح مباشرة على أي جهاز." },
      { q: "هل يدعم اللغة العربية بالكامل؟", a: "نعم، الواجهة مصمّمة للعربية من اليمين لليسار (RTL) مع دعم كامل للإنجليزية." },
      { q: "كيف يظهر الجدول على شاشات العرض؟", a: "يوجد وضع خاص لشاشات العرض يكبّر البطاقات والخطوط تلقائياً." },
      { q: "هل يمكن تخصيص التصميم؟", a: "نعم، يمكن تعديل الألوان والشعار لتتناسب مع هوية فعاليتك." },
      { q: "ما تكلفة الخدمة؟", a: "تواصل معنا عبر البريد للحصول على عرض سعر مخصّص لفعاليتك." }
    ],

    // Contact
    contactTitle: "تواصل معنا",
    contactDesc: "نسعد بمساعدتك في تنظيم فعاليتك القادمة",
    contactEmail: "hello@eventme.live",
    copyEmail: "نسخ البريد",
    copySuccess: "تم النسخ!",

    // Footer
    footerCopy: "© 2025 EventMe. جميع الحقوق محفوظة.",
    footerNote: "صُمّم للجوال وشاشات العرض في مواقع الفعاليات",

    // ====== Timeline Page ======
    tlPageTitle: "EventMe — الجدول الزمني",
    tlEventTitle: "مؤتمر التقنية والابتكار ٢٠٢٥",
    tlEventVenue: "مركز الرياض الدولي للمؤتمرات",
    tlEventDate: "١٥ يناير ٢٠٢٥",
    tlCurrentTime: "الوقت الحالي",
    tlLastUpdated: "آخر تحديث",
    tlTimezone: "توقيت الرياض (UTC+3)",
    tlShare: "مشاركة",
    tlShareSuccess: "تم نسخ الرابط!",
    tlFilterAll: "جميع القاعات",
    tlAutoRefresh: "تحديث تلقائي",
    tlOn: "مفعّل",
    tlOff: "متوقف",
    tlVenueMode: "وضع الشاشة",
    tlFullscreenHint: "اضغط F11 للشاشة الكاملة",
    tlBackHome: "الصفحة الرئيسية",

    // Status
    statusNow: "الآن",
    statusNext: "التالي",
    statusDone: "انتهت",
    statusAlsoLive: "أيضاً مباشر",

    // Stages
    stageMain: "القاعة الرئيسية",
    stageWorkshop: "قاعة الورش",
    stagePanel: "قاعة النقاش",

    // Sessions
    tlNoSessions: "لا توجد جلسات مطابقة",
    tlNowNext: "الآن والقادم",
    tlSchedule: "الجدول الكامل",
    tlSpeaker: "المتحدث",
    tlAlsoLive: "جلسات مباشرة أيضاً",

    // 404
    notFoundTitle: "الصفحة غير موجودة",
    notFoundDesc: "عذراً، هذه الصفحة غير موجودة.",
    notFoundBtn: "العودة للرئيسية"
  },

  en: {
    siteTitle: "EventMe",
    langLabel: "عربي",
    langAriaLabel: "التبديل إلى العربية",

    navWhat: "What",
    navBenefits: "Benefits",
    navHow: "How",
    navUseCases: "Use Cases",
    navFaq: "FAQ",
    navContact: "Contact",

    heroTitle: "Your Smart Event Timeline",
    heroSubtitle: "Show attendees what's happening now, what's next — on mobile and venue screens",
    ctaDemo: "View Demo",
    ctaContact: "Contact Us",

    whatTitle: "What is EventMe?",
    whatP1: "EventMe is an interactive, real-time event timeline tool. Attendees instantly see the current and upcoming sessions — no app download required.",
    whatP2: "Designed for mobile devices and large venue screens, with full Arabic and English support.",

    benefitsTitle: "Benefits",
    benefitsOrgTitle: "For Organizers",
    benefitsOrg: [
      "Quick setup — no apps or downloads",
      "Instant schedule updates",
      "Live display on venue screens",
      "Full Arabic and English support"
    ],
    benefitsAttTitle: "For Attendees",
    benefitsAtt: [
      "Instantly see current and next sessions",
      "Filter by stage or room",
      "Share the schedule easily",
      "Works directly in the browser"
    ],

    howTitle: "How It Works",
    howSteps: [
      { num: "1", title: "Create Your Event", desc: "Enter session details, speakers, and rooms" },
      { num: "2", title: "Share the Link", desc: "Send the timeline URL to attendees or display it on screens" },
      { num: "3", title: "Go Live", desc: "The schedule updates automatically and shows real-time status" }
    ],

    useCasesTitle: "Use Cases",
    useCases: [
      { title: "Conferences", desc: "Track multiple sessions across different rooms with live updates" },
      { title: "Exhibitions", desc: "Guide visitors to demos, workshops, and ongoing events" },
      { title: "Multi-Stage Events", desc: "Opening ceremonies, workshops, panels — all in one place" }
    ],

    faqTitle: "FAQ",
    faqs: [
      { q: "Do I need to install an app?", a: "No, EventMe works directly in any browser on any device." },
      { q: "Does it fully support Arabic?", a: "Yes, the interface is designed for Arabic RTL with full English support." },
      { q: "How does it look on venue screens?", a: "There's a dedicated venue screen mode that enlarges cards and fonts automatically." },
      { q: "Can I customize the design?", a: "Yes, colors and logo can be adjusted to match your event's branding." },
      { q: "How much does it cost?", a: "Contact us via email for a custom quote for your event." }
    ],

    contactTitle: "Get in Touch",
    contactDesc: "We'd love to help with your next event",
    contactEmail: "hello@eventme.live",
    copyEmail: "Copy Email",
    copySuccess: "Copied!",

    footerCopy: "© 2025 EventMe. All rights reserved.",
    footerNote: "Built for mobile and venue screens",

    tlPageTitle: "EventMe — Timeline",
    tlEventTitle: "Tech & Innovation Conference 2025",
    tlEventVenue: "Riyadh International Convention Center",
    tlEventDate: "January 15, 2025",
    tlCurrentTime: "Current Time",
    tlLastUpdated: "Last Updated",
    tlTimezone: "Asia/Riyadh (UTC+3)",
    tlShare: "Share",
    tlShareSuccess: "Link copied!",
    tlFilterAll: "All Stages",
    tlAutoRefresh: "Auto Refresh",
    tlOn: "ON",
    tlOff: "OFF",
    tlVenueMode: "Venue Screen",
    tlFullscreenHint: "Press F11 for fullscreen",
    tlBackHome: "Home",

    statusNow: "NOW",
    statusNext: "NEXT",
    statusDone: "DONE",
    statusAlsoLive: "ALSO LIVE",

    stageMain: "Main Hall",
    stageWorkshop: "Workshop Room",
    stagePanel: "Panel Room",

    tlNoSessions: "No matching sessions",
    tlNowNext: "Now & Next",
    tlSchedule: "Full Schedule",
    tlSpeaker: "Speaker",
    tlAlsoLive: "Also Live Now",

    notFoundTitle: "Page Not Found",
    notFoundDesc: "Sorry, this page doesn't exist.",
    notFoundBtn: "Back to Home"
  }
};

/* ── Language Manager ─────────────────────────────── */
const LangManager = {
  _listeners: [],

  init() {
    const saved = localStorage.getItem("eventme_lang");
    if (saved && (saved === "ar" || saved === "en")) {
      this.set(saved, true);
    } else {
      const browserLang = navigator.language || navigator.userLanguage || "en";
      this.set(browserLang.startsWith("ar") ? "ar" : "en", true);
    }
  },

  get() {
    return document.documentElement.lang || "ar";
  },

  set(lang, silent) {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    localStorage.setItem("eventme_lang", lang);
    if (!silent) this._notify();
  },

  toggle() {
    this.set(this.get() === "ar" ? "en" : "ar");
  },

  t(key) {
    const lang = this.get();
    return I18N[lang]?.[key] ?? key;
  },

  tArr(key) {
    const lang = this.get();
    return I18N[lang]?.[key] ?? [];
  },

  onLangChange(fn) {
    this._listeners.push(fn);
  },

  _notify() {
    this._listeners.forEach(fn => fn(this.get()));
  }
};
