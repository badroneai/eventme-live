/**
 * EventMe — Application Logic
 * Handles: language switching, landing page rendering, timeline engine.
 */

/* ═══════════════════════════════════════
   SHARED UTILITIES
   ═══════════════════════════════════════ */

/** Copy text to clipboard with localized feedback */
function copyToClipboard(text, btn, successKey) {
  navigator.clipboard.writeText(text).then(() => {
    const orig = btn.textContent;
    btn.textContent = LangManager.t(successKey || "copySuccess");
    btn.classList.add("copied");
    setTimeout(() => {
      btn.textContent = orig;
      btn.classList.remove("copied");
    }, 2000);
  }).catch(() => {});
}

/** Scroll header shadow */
function initHeaderScroll() {
  const header = document.querySelector(".site-header");
  if (!header) return;
  const check = () => header.classList.toggle("scrolled", window.scrollY > 5);
  window.addEventListener("scroll", check, { passive: true });
  check();
}

/* ═══════════════════════════════════════
   LANDING PAGE
   ═══════════════════════════════════════ */
function initLanding() {
  const page = document.getElementById("landing-page");
  if (!page) return;

  function render() {
    const t = (k) => LangManager.t(k);
    const tArr = (k) => LangManager.tArr(k);

    // Update <title> and meta
    document.title = t("siteTitle") + " — " + t("heroTitle");

    // Nav
    setText("#nav-what", t("navWhat"));
    setText("#nav-benefits", t("navBenefits"));
    setText("#nav-how", t("navHow"));
    setText("#nav-usecases", t("navUseCases"));
    setText("#nav-faq", t("navFaq"));
    setText("#nav-contact", t("navContact"));

    // Lang toggle
    const langBtn = document.getElementById("lang-toggle");
    if (langBtn) {
      langBtn.querySelector(".lang-text").textContent = t("langLabel");
      langBtn.setAttribute("aria-label", t("langAriaLabel"));
    }

    // Hero
    setText("#hero-title", t("heroTitle"));
    setText("#hero-subtitle", t("heroSubtitle"));
    setText("#cta-demo", t("ctaDemo"));
    setText("#cta-contact", t("ctaContact"));

    // What
    setText("#what-title", t("whatTitle"));
    setText("#what-p1", t("whatP1"));
    setText("#what-p2", t("whatP2"));

    // Benefits
    setText("#benefits-title", t("benefitsTitle"));
    setText("#benefits-org-title", t("benefitsOrgTitle"));
    setText("#benefits-att-title", t("benefitsAttTitle"));
    renderList("#benefits-org-list", tArr("benefitsOrg"));
    renderList("#benefits-att-list", tArr("benefitsAtt"));

    // How
    setText("#how-title", t("howTitle"));
    const steps = tArr("howSteps");
    const stepsEl = document.getElementById("steps-grid");
    if (stepsEl) {
      stepsEl.innerHTML = steps.map(s => `
        <div class="step-card">
          <div class="step-num">${s.num}</div>
          <h3>${s.title}</h3>
          <p>${s.desc}</p>
        </div>
      `).join("");
    }

    // Use Cases
    setText("#usecases-title", t("useCasesTitle"));
    const ucs = tArr("useCases");
    const icons = ["🎤", "🏛️", "🎭"];
    const ucsEl = document.getElementById("usecases-grid");
    if (ucsEl) {
      ucsEl.innerHTML = ucs.map((uc, i) => `
        <div class="usecase-card">
          <div class="usecase-icon">${icons[i]}</div>
          <h3>${uc.title}</h3>
          <p>${uc.desc}</p>
        </div>
      `).join("");
    }

    // FAQ
    setText("#faq-title", t("faqTitle"));
    const faqs = tArr("faqs");
    const faqEl = document.getElementById("faq-list");
    if (faqEl) {
      faqEl.innerHTML = faqs.map((f, i) => `
        <div class="faq-item" data-faq="${i}">
          <button class="faq-q" aria-expanded="false">
            <span>${f.q}</span>
            <svg class="faq-chevron" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"/></svg>
          </button>
          <div class="faq-a"><p>${f.a}</p></div>
        </div>
      `).join("");
      // Bind FAQ toggles
      faqEl.querySelectorAll(".faq-q").forEach(btn => {
        btn.addEventListener("click", () => {
          const item = btn.closest(".faq-item");
          const isOpen = item.classList.contains("open");
          faqEl.querySelectorAll(".faq-item").forEach(it => it.classList.remove("open"));
          if (!isOpen) item.classList.add("open");
          btn.setAttribute("aria-expanded", !isOpen);
        });
      });
    }

    // Contact
    setText("#contact-title", t("contactTitle"));
    setText("#contact-desc", t("contactDesc"));
    setText("#contact-email-link", t("contactEmail"));
    setText("#contact-email-plain", t("contactEmail"));
    const copyBtn = document.getElementById("copy-email-btn");
    if (copyBtn) {
      copyBtn.querySelector(".copy-text").textContent = t("copyEmail");
    }

    // Footer
    setText("#footer-copy", t("footerCopy"));
    setText("#footer-note", t("footerNote"));
  }

  // Copy email handler
  document.getElementById("copy-email-btn")?.addEventListener("click", function() {
    copyToClipboard("hello@eventme.live", this.querySelector(".copy-text"), "copySuccess");
  });

  // Lang toggle
  document.getElementById("lang-toggle")?.addEventListener("click", () => {
    LangManager.toggle();
  });

  LangManager.onLangChange(render);
  render();
}

/* ═══════════════════════════════════════
   TIMELINE PAGE
   ═══════════════════════════════════════ */
function initTimeline() {
  const page = document.getElementById("timeline-page");
  if (!page) return;

  let sessions = buildSampleSessions();
  let autoRefresh = true;
  let venueMode = false;
  let refreshInterval = null;

  function render() {
    const t = (k) => LangManager.t(k);
    const lang = LangManager.get();

    document.title = t("tlPageTitle");

    // Header
    setText("#tl-back", t("tlBackHome"));
    const langBtn = document.getElementById("tl-lang-toggle");
    if (langBtn) {
      langBtn.querySelector(".lang-text").textContent = t("langLabel");
      langBtn.setAttribute("aria-label", t("langAriaLabel"));
    }

    // Event bar
    setText("#tl-event-title", t("tlEventTitle"));
    setText("#tl-venue", t("tlEventVenue"));
    setText("#tl-date", t("tlEventDate"));
    const shareBtn = document.getElementById("tl-share-btn");
    if (shareBtn) shareBtn.querySelector(".share-text").textContent = t("tlShare");

    // Clock
    setText("#tl-time-label", t("tlCurrentTime"));
    setText("#tl-updated-label", t("tlLastUpdated"));
    setText("#tl-tz", t("tlTimezone"));

    // Controls
    setText("#tl-auto-label", t("tlAutoRefresh"));
    setText("#tl-auto-state", autoRefresh ? t("tlOn") : t("tlOff"));
    setText("#tl-venue-label", t("tlVenueMode"));
    setText("#tl-fullscreen-hint", t("tlFullscreenHint"));

    // Filter
    const sel = document.getElementById("tl-stage-filter");
    if (sel) {
      const val = sel.value;
      sel.innerHTML = `<option value="all">${t("tlFilterAll")}</option>`;
      STAGES.forEach(s => {
        const opt = document.createElement("option");
        opt.value = s;
        opt.textContent = t(getStageI18n(s));
        sel.appendChild(opt);
      });
      sel.value = val || "all";
    }

    // Sidebar / Schedule labels
    setText("#tl-sidebar-title", t("tlNowNext"));
    setText("#tl-schedule-title", t("tlSchedule"));

    updateClock();
    renderSessions();
  }

  function updateClock() {
    const now = new Date(new Date().toLocaleString("en-US", { timeZone: "Asia/Riyadh" }));
    const timeStr = now.toLocaleTimeString(LangManager.get() === "ar" ? "ar-SA" : "en-US", {
      hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: true
    });
    setText("#tl-clock", timeStr);
    const updatedStr = now.toLocaleTimeString(LangManager.get() === "ar" ? "ar-SA" : "en-US", {
      hour: "2-digit", minute: "2-digit", hour12: true
    });
    setText("#tl-updated-time", updatedStr);
  }

  function computeStatuses() {
    const now = new Date(new Date().toLocaleString("en-US", { timeZone: "Asia/Riyadh" }));
    const todayStr = `${now.getFullYear()}-${String(now.getMonth()+1).padStart(2,"0")}-${String(now.getDate()).padStart(2,"0")}`;
    const nowMin = now.getHours() * 60 + now.getMinutes();

    // Parse times
    const parsed = sessions.map(s => {
      const [sh, sm] = s.start.split(":").map(Number);
      const [eh, em] = s.end.split(":").map(Number);
      return {
        ...s,
        startMin: sh * 60 + sm,
        endMin: eh * 60 + em,
        duration: (eh * 60 + em) - (sh * 60 + sm)
      };
    }).sort((a, b) => a.startMin - b.startMin || a.duration - b.duration);

    // Classify
    const live = [];
    const done = [];
    const upcoming = [];

    parsed.forEach(s => {
      if (nowMin >= s.endMin) {
        s.status = "done";
        done.push(s);
      } else if (nowMin >= s.startMin && nowMin < s.endMin) {
        s.status = "now";
        live.push(s);
      } else {
        s.status = "upcoming";
        upcoming.push(s);
      }
    });

    // Determine NOW / ALSO_LIVE
    let nowSession = null;
    const alsoLive = [];
    if (live.length > 0) {
      // Pick NOW: earliest start, then shortest duration
      live.sort((a, b) => a.startMin - b.startMin || a.duration - b.duration);
      nowSession = live[0];
      nowSession.status = "now";
      live.slice(1).forEach(s => { s.status = "also-live"; alsoLive.push(s); });
    }

    // Determine NEXT
    let nextSession = null;
    if (upcoming.length > 0) {
      nextSession = upcoming[0];
      nextSession.status = "next";
    }

    return { all: parsed, nowSession, nextSession, alsoLive, done, upcoming };
  }

  function renderSessions() {
    const t = (k) => LangManager.t(k);
    const lang = LangManager.get();
    const filter = document.getElementById("tl-stage-filter")?.value || "all";
    const { all, nowSession, nextSession, alsoLive } = computeStatuses();

    // Filter
    const filtered = filter === "all" ? all : all.filter(s => s.stage === filter);

    // Sidebar: NOW + NEXT
    const sidebarEl = document.getElementById("tl-sidebar-cards");
    if (sidebarEl) {
      let html = "";
      if (nowSession && (filter === "all" || nowSession.stage === filter)) {
        html += renderCard(nowSession, lang, true);
      }
      if (nextSession && (filter === "all" || nextSession.stage === filter)) {
        html += renderCard(nextSession, lang, true);
      }
      if (alsoLive.length > 0) {
        const filteredLive = filter === "all" ? alsoLive : alsoLive.filter(s => s.stage === filter);
        if (filteredLive.length > 0) {
          html += `<div class="tl-also-live"><div class="tl-also-live-title">${t("tlAlsoLive")}</div>`;
          filteredLive.forEach(s => { html += renderCard(s, lang, false); });
          html += `</div>`;
        }
      }
      if (!html) html = `<div class="tl-empty" style="padding:var(--sp-8)">${t("tlNoSessions")}</div>`;
      sidebarEl.innerHTML = html;
    }

    // Full schedule
    const scheduleEl = document.getElementById("tl-schedule-cards");
    if (scheduleEl) {
      if (filtered.length === 0) {
        scheduleEl.innerHTML = `<div class="tl-empty">${t("tlNoSessions")}</div>`;
      } else {
        scheduleEl.innerHTML = filtered.map(s => renderCard(s, lang, false)).join("");
      }
    }
  }

  function renderCard(s, lang, isSidebar) {
    const t = (k) => LangManager.t(k);
    const statusClass = `status-${s.status}`;
    const sidebarClass = isSidebar ? "sidebar-card" : "";

    let badgeClass = "", badgeText = "";
    switch (s.status) {
      case "now": badgeClass = "badge-now"; badgeText = t("statusNow"); break;
      case "next": badgeClass = "badge-next"; badgeText = t("statusNext"); break;
      case "done": badgeClass = "badge-done"; badgeText = t("statusDone"); break;
      case "also-live": badgeClass = "badge-also-live"; badgeText = t("statusAlsoLive"); break;
      default: badgeClass = "badge-done"; badgeText = "";
    }

    const title = s.title[lang] || s.title.en;
    const stage = t(getStageI18n(s.stage));
    const speakerStr = s.speaker ? (s.speaker[lang] || s.speaker.en) : "";

    return `
      <div class="session-card ${statusClass} ${sidebarClass}">
        <div class="session-top">
          <span class="session-time">${s.start} – ${s.end}</span>
          ${badgeText ? `<span class="session-badge ${badgeClass}">${badgeText}</span>` : ""}
        </div>
        <div class="session-title">${title}</div>
        <div class="session-meta">
          <span class="session-meta-item">📍 ${stage}</span>
          ${speakerStr ? `<span class="session-meta-item">👤 ${speakerStr}</span>` : ""}
        </div>
      </div>
    `;
  }

  // ── Event Handlers ──

  // Share
  document.getElementById("tl-share-btn")?.addEventListener("click", function() {
    copyToClipboard(window.location.href, this.querySelector(".share-text"), "tlShareSuccess");
  });

  // Lang toggle
  document.getElementById("tl-lang-toggle")?.addEventListener("click", () => {
    LangManager.toggle();
  });

  // Stage filter
  document.getElementById("tl-stage-filter")?.addEventListener("change", renderSessions);

  // Auto refresh toggle
  document.getElementById("tl-auto-toggle")?.addEventListener("click", function() {
    autoRefresh = !autoRefresh;
    this.classList.toggle("active", autoRefresh);
    setText("#tl-auto-state", autoRefresh ? LangManager.t("tlOn") : LangManager.t("tlOff"));
    manageInterval();
  });

  // Venue mode toggle
  document.getElementById("tl-venue-toggle")?.addEventListener("click", function() {
    venueMode = !venueMode;
    this.classList.toggle("active", venueMode);
    document.body.classList.toggle("venue-mode", venueMode);
  });

  function manageInterval() {
    if (refreshInterval) clearInterval(refreshInterval);
    if (autoRefresh) {
      refreshInterval = setInterval(() => {
        sessions = buildSampleSessions();
        updateClock();
        renderSessions();
      }, 30000);
    }
  }

  // Init
  LangManager.onLangChange(render);
  render();
  manageInterval();

  // Update clock every second
  setInterval(updateClock, 1000);
}

/* ═══════════════════════════════════════
   HELPERS
   ═══════════════════════════════════════ */
function setText(selector, text) {
  const el = document.querySelector(selector);
  if (el) el.textContent = text;
}

function renderList(selector, items) {
  const el = document.querySelector(selector);
  if (!el || !Array.isArray(items)) return;
  el.innerHTML = items.map(item => `<li><span>${item}</span></li>`).join("");
}

/* ═══════════════════════════════════════
   INIT
   ═══════════════════════════════════════ */
document.addEventListener("DOMContentLoaded", () => {
  LangManager.init();
  initHeaderScroll();
  initLanding();
  initTimeline();
});
