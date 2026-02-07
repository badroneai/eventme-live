/**
 * EventMe — Sample Event Data
 * 12 sessions across 3 stages, including overlap scenarios.
 * Times use "HH:MM" format and are in Asia/Riyadh (UTC+3).
 *
 * To make the demo always show live sessions, we dynamically
 * generate today's date for the event and shift session times
 * around the current hour.
 */

const STAGES = ["main", "workshop", "panel"];

function getStageI18n(stageId) {
  const map = { main: "stageMain", workshop: "stageWorkshop", panel: "stagePanel" };
  return map[stageId] || stageId;
}

/**
 * Build sample sessions relative to "now" so the demo always has
 * NOW / NEXT / DONE items regardless of when you open the page.
 */
function buildSampleSessions() {
  // Get current time in Riyadh
  const nowRiyadh = new Date(
    new Date().toLocaleString("en-US", { timeZone: "Asia/Riyadh" })
  );
  const H = nowRiyadh.getHours();
  const M = nowRiyadh.getMinutes();

  // Helper: create time string offset from now in minutes
  function t(offsetMin) {
    const total = H * 60 + M + offsetMin;
    const h = Math.floor(((total % 1440) + 1440) % 1440 / 60);
    const m = ((total % 60) + 60) % 60;
    return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`;
  }

  return [
    // ── DONE sessions ──
    {
      id: 1,
      start: t(-180), end: t(-150),
      title: { ar: "التسجيل والاستقبال", en: "Registration & Welcome" },
      stage: "main",
      speaker: null
    },
    {
      id: 2,
      start: t(-150), end: t(-105),
      title: { ar: "كلمة الافتتاح", en: "Opening Keynote" },
      stage: "main",
      speaker: { ar: "د. سارة الأحمد", en: "Dr. Sarah Al-Ahmad" }
    },
    {
      id: 3,
      start: t(-105), end: t(-60),
      title: { ar: "مستقبل الذكاء الاصطناعي", en: "The Future of AI" },
      stage: "main",
      speaker: { ar: "م. خالد المنصور", en: "Eng. Khalid Al-Mansour" }
    },
    {
      id: 4,
      start: t(-100), end: t(-55),
      title: { ar: "ورشة: بناء تطبيقات الجوال", en: "Workshop: Mobile App Development" },
      stage: "workshop",
      speaker: { ar: "أ. نورة العتيبي", en: "Noura Al-Otaibi" }
    },
    {
      id: 5,
      start: t(-60), end: t(-15),
      title: { ar: "الأمن السيبراني في المؤسسات", en: "Enterprise Cybersecurity" },
      stage: "panel",
      speaker: { ar: "أ. فهد الدوسري", en: "Fahad Al-Dosari" }
    },

    // ── NOW sessions (overlap scenario) ──
    {
      id: 6,
      start: t(-20), end: t(25),
      title: { ar: "الحوسبة السحابية وتحديات التحول الرقمي", en: "Cloud Computing & Digital Transformation" },
      stage: "main",
      speaker: { ar: "د. ريم القحطاني", en: "Dr. Reem Al-Qahtani" }
    },
    {
      id: 7,
      start: t(-10), end: t(35),
      title: { ar: "ورشة: أدوات الذكاء الاصطناعي التوليدي", en: "Workshop: Generative AI Tools" },
      stage: "workshop",
      speaker: { ar: "م. عبدالله السبيعي", en: "Eng. Abdullah Al-Subaie" }
    },

    // ── NEXT sessions ──
    {
      id: 8,
      start: t(30), end: t(75),
      title: { ar: "نقاش: ريادة الأعمال التقنية", en: "Panel: Tech Entrepreneurship" },
      stage: "panel",
      speaker: { ar: "أ. منى الشهري", en: "Mona Al-Shahri" }
    },
    {
      id: 9,
      start: t(40), end: t(85),
      title: { ar: "البيانات الضخمة وتحليلاتها", en: "Big Data & Analytics" },
      stage: "main",
      speaker: { ar: "د. عمر الحربي", en: "Dr. Omar Al-Harbi" }
    },

    // ── Future sessions ──
    {
      id: 10,
      start: t(90), end: t(135),
      title: { ar: "ورشة: تصميم تجربة المستخدم", en: "Workshop: UX Design Masterclass" },
      stage: "workshop",
      speaker: null
    },
    {
      id: 11,
      start: t(140), end: t(185),
      title: { ar: "إنترنت الأشياء في المدن الذكية", en: "IoT in Smart Cities" },
      stage: "panel",
      speaker: { ar: "م. ليلى الزهراني", en: "Eng. Laila Al-Zahrani" }
    },
    {
      id: 12,
      start: t(190), end: t(220),
      title: { ar: "الجلسة الختامية والتكريم", en: "Closing Session & Awards" },
      stage: "main",
      speaker: null
    }
  ];
}
