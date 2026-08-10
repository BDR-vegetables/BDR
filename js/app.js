(() => {
  "use strict";

  const data = () => window.BDR_DATA || {};
  const business = () => data().BUSINESS || {};
  const messages = () => data().MESSAGES || {};
  const products = () => Array.isArray(window.BDR_PRODUCTS) ? window.BDR_PRODUCTS : [];
  const i18n = () => window.BDRLanguage;

  const iconPaths = {
    leaf: '<path d="M20 4c-7.5.2-12.4 3.1-14.6 8.7-1.1 2.9-.7 5.4.4 7.3 1.9-5.4 5.1-8.6 9.8-10.8-4 2.8-6.6 6.4-7.9 10.8"/><path d="M7.7 20H4"/>',
    box: '<path d="M21 8l-9 5-9-5 9-5 9 5Z"/><path d="M3 8v8l9 5 9-5V8"/><path d="M12 13v8"/>',
    store: '<path d="M3 9l2-5h14l2 5"/><path d="M5 13v7h14v-7"/><path d="M3 9a3 3 0 0 0 6 0 3 3 0 0 0 6 0 3 3 0 0 0 6 0"/>',
    message: '<path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z"/><path d="M8 9h8M8 13h5"/>',
    package: '<path d="M16.5 9.4 7.5 4.2"/><path d="M21 16V8a2 2 0 0 0-1-1.7l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.7l7 4a2 2 0 0 0 2 0l7-4a2 2 0 0 0 1-1.7Z"/><path d="M3.3 7 12 12l8.7-5"/><path d="M12 22V12"/>',
    users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>',
    phone: '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L8 9.73a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 22 16.92z"/>',
    map: '<path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0z"/><circle cx="12" cy="10" r="2.5"/>',
    mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
    copy: '<rect x="9" y="9" width="11" height="11" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>',
    truck: '<path d="M10 17h4V5H2v12h3"/><path d="M14 9h4l4 4v4h-3"/><circle cx="7.5" cy="17.5" r="2.5"/><circle cx="16.5" cy="17.5" r="2.5"/>',
    handshake: '<path d="m11 17 2 2a2 2 0 0 0 3-3l-3-3"/><path d="m14 14 2 2a2 2 0 0 0 3-3l-4.5-4.5a2 2 0 0 0-2.8 0L9 11.2a2 2 0 0 1-2.8 0l-.2-.2a2 2 0 0 1 0-2.8l3-3"/><path d="M2 5h5l2 2M22 5h-5l-2 2"/>',
    shopbag: '<path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18M16 10a4 4 0 0 1-8 0"/>',
    building: '<path d="M3 21h18M6 21V7l6-4 6 4v14M9 10h.01M15 10h.01M9 14h.01M15 14h.01M10 21v-4h4v4"/>',
    utensils: '<path d="M3 2v7a3 3 0 0 0 3 3V2M9 2v7a3 3 0 0 1-3 3v10M17 2v20M17 2c3 0 4 3 4 6s-1 5-4 5"/>',
    hotel: '<path d="M3 21V8h18v13M3 14h18M7 8V4h10v4M7 18h2M15 18h2"/>',
    institution: '<path d="M3 22h18M5 10h14M6 10v8M10 10v8M14 10v8M18 10v8M3 7l9-5 9 5Z"/>',
    farmer: '<path d="M4 21c0-6 3-10 8-14 5 4 8 8 8 14"/><path d="M12 7V3M8 5l4 2 4-2M7 21h10"/>',
    info: '<circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8h.01"/>',
    arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>'
  };

  function svgIcon(name, className = "") {
    const path = iconPaths[name] || iconPaths.leaf;
    return `<svg class="${className}" viewBox="0 0 24 24" aria-hidden="true">${path}</svg>`;
  }

  function tr(path) {
    return i18n()?.t?.(path) ?? path;
  }

  function lang() {
    return i18n()?.currentLanguage?.() || "en";
  }

  function formatPhone(number) {
    const value = String(number || "").replace(/\D/g, "");
    return value.length === 10 ? `${value.slice(0, 5)} ${value.slice(5)}` : value;
  }

  function waUrl(phone, message) {
    const digits = String(phone || "").replace(/\D/g, "");
    const international = digits.startsWith("91") ? digits : `91${digits}`;
    return `https://wa.me/${international}?text=${encodeURIComponent(message || "")}`;
  }

  function callUrl(phone) {
    return `tel:${String(phone || "").replace(/\D/g, "")}`;
  }

  function emailUrl() {
    const b = business();
    return `mailto:${b.email}?subject=${encodeURIComponent(b.emailSubject || "")}`;
  }

  function productMessage(product) {
    return String(messages().productWhatsAppTemplate || "Hello BDR Vegetables, I would like to enquire about {product} availability.")
      .replace("{product}", product.name?.en || product.id || "vegetable");
  }

  function setBusinessText() {
    const b = business();
    const shopInline = (b.shopNumbers || []).join(" • ");

    document.querySelectorAll("[data-business-name]").forEach((el) => { el.textContent = b.name || "BDR Vegetables Wholesale Shop"; });
    document.querySelectorAll("[data-owner]").forEach((el) => { el.textContent = b.owner || ""; });
    document.querySelectorAll("[data-shop-numbers]").forEach((el) => { el.textContent = shopInline; });
    document.querySelectorAll("[data-primary-phone-display]").forEach((el) => { el.textContent = formatPhone(b.primaryContact?.phone); });
    document.querySelectorAll("[data-primary-name]").forEach((el) => { el.textContent = b.primaryContact?.name || "Ramesh"; });
    document.querySelectorAll("[data-email-display]").forEach((el) => { el.textContent = b.email || ""; });
    document.querySelectorAll("[data-bdr-phone-display]").forEach((el) => { el.textContent = formatPhone(b.contacts?.bdr?.phone); });
    document.querySelectorAll("[data-market]").forEach((el) => { el.textContent = b.address?.market || ""; });
    document.querySelectorAll("[data-road]").forEach((el) => { el.textContent = b.address?.road || ""; });
    document.querySelectorAll("[data-locality]").forEach((el) => { el.textContent = b.address?.locality || ""; });
    document.querySelectorAll("[data-state]").forEach((el) => { el.textContent = b.address?.state || ""; });
    document.querySelectorAll("[data-pincode]").forEach((el) => { el.textContent = b.address?.pincode || ""; });
    document.querySelectorAll("[data-year]").forEach((el) => { el.textContent = String(new Date().getFullYear()); });
  }

  function renderHighlights() {
    const target = document.querySelector("#highlight-grid");
    if (!target) return;
    const cards = [
      ["leaf", "highlights.freshTitle", "highlights.freshText"],
      ["box", "highlights.wholesaleTitle", "highlights.wholesaleText"],
      ["store", "highlights.shopsTitle", "highlights.shopsText"],
      ["message", "highlights.contactTitle", "highlights.contactText"]
    ];
    target.innerHTML = cards.map(([icon, title, text]) => `
      <article class="highlight-card">
        <div class="highlight-icon">${svgIcon(icon)}</div>
        <div><strong>${tr(title)}</strong><span>${tr(text)}</span></div>
      </article>`).join("");
  }

  function renderFeatureGrid(targetSelector, cards) {
    const target = document.querySelector(targetSelector);
    if (!target) return;
    target.innerHTML = cards.map((card, index) => `
      <article class="feature-card reveal${index > 0 ? ` reveal-delay-${Math.min(index, 3)}` : ""}">
        <div class="icon-box">${svgIcon(card.icon)}</div>
        <h3>${tr(card.title)}</h3>
        <p>${tr(card.text)}</p>
      </article>`).join("");
  }

  function renderWholesale() {
    renderFeatureGrid("#wholesale-grid", [
      { icon: "leaf", title: "wholesale.freshTitle", text: "wholesale.freshText" },
      { icon: "package", title: "wholesale.bulkTitle", text: "wholesale.bulkText" },
      { icon: "message", title: "wholesale.directTitle", text: "wholesale.directText" },
      { icon: "handshake", title: "wholesale.supplierTitle", text: "wholesale.supplierText" }
    ]);
  }

  function renderWhy() {
    renderFeatureGrid("#why-grid", [
      { icon: "box", title: "why.focusTitle", text: "why.focusText" },
      { icon: "phone", title: "why.communicationTitle", text: "why.communicationText" },
      { icon: "map", title: "why.locationTitle", text: "why.locationText" },
      { icon: "handshake", title: "why.supplierTitle", text: "why.supplierText" },
      { icon: "store", title: "why.shopsTitle", text: "why.shopsText" },
      { icon: "message", title: "why.whatsappTitle", text: "why.whatsappText" }
    ]);
  }

  function renderProducts() {
    const target = document.querySelector("#product-grid");
    if (!target) return;
    const current = lang();
    const b = business();

    target.innerHTML = products().map((product, index) => {
      const productName = product.name?.[current] || product.name?.en || product.id;
      const url = waUrl(b.primaryContact?.phone, productMessage(product));
      return `
        <article class="product-card reveal${index % 4 ? ` reveal-delay-${Math.min(index % 4, 3)}` : ""}" data-accent="${product.accent || "leaf"}">
          <div class="product-media">
            <span class="product-fallback">${productName}</span>
            <img src="${product.image}" width="1000" height="760" loading="lazy" alt="${productName} — BDR Vegetables product showcase visual">
          </div>
          <div class="product-content">
            <div class="product-title-row"><h3>${productName}</h3><span class="product-dot" aria-hidden="true"></span></div>
            <a class="btn btn-secondary" href="${url}" target="_blank" rel="noopener noreferrer" aria-label="${tr("ui.askAvailability")}: ${productName}">
              ${svgIcon("message")}<span>${tr("ui.askAvailability")}</span>
            </a>
          </div>
        </article>`;
    }).join("");

    target.querySelectorAll("img").forEach((img) => {
      img.addEventListener("error", () => img.closest(".product-media")?.classList.add("has-error"), { once: true });
    });
  }

  function renderAudience() {
    const target = document.querySelector("#audience-grid");
    if (!target) return;
    const items = [
      ["shopbag", "serve.retailers"],
      ["store", "serve.supermarkets"],
      ["utensils", "serve.restaurants"],
      ["hotel", "serve.hotels"],
      ["utensils", "serve.caterers"],
      ["package", "serve.traders"],
      ["institution", "serve.institutions"],
      ["users", "serve.bulkBuyers"],
      ["farmer", "serve.farmers"],
      ["handshake", "serve.suppliers"]
    ];
    target.innerHTML = items.map(([icon, label], index) => `
      <article class="audience-card reveal${index % 4 ? ` reveal-delay-${Math.min(index % 4, 3)}` : ""}">
        <div class="icon-box">${svgIcon(icon)}</div><strong>${tr(label)}</strong>
      </article>`).join("");
  }

  function smallActionButton(type, phone, label) {
    if (type === "call") {
      return `<a class="icon-btn" href="${callUrl(phone)}" aria-label="${tr("ui.call")}: ${formatPhone(phone)}" title="${tr("ui.call")}">${svgIcon("phone")}</a>`;
    }
    return `<button class="icon-btn" type="button" data-copy-phone="${phone}" aria-label="${tr("ui.copy")}: ${formatPhone(phone)}" title="${tr("ui.copy")}">${svgIcon("copy")}</button>`;
  }

  function renderContacts() {
    const b = business();
    const primary = document.querySelector("#primary-contact-actions");
    if (primary) {
      primary.innerHTML = `
        <a class="btn btn-primary" href="${waUrl(b.primaryContact?.phone, messages().primaryWhatsApp)}" target="_blank" rel="noopener noreferrer">${svgIcon("message")}<span>${tr("ui.whatsapp")}</span></a>
        <a class="btn btn-secondary" href="${callUrl(b.primaryContact?.phone)}">${svgIcon("phone")}<span>${tr("ui.call")}</span></a>
        <button class="btn btn-secondary" type="button" data-copy-phone="${b.primaryContact?.phone}">${svgIcon("copy")}<span>${tr("ui.copy")}</span></button>`;
    }

    const secondary = document.querySelector("#secondary-contact-list");
    if (secondary) {
      const list = [
        { label: "BDR", phone: b.contacts?.bdr?.phone, whatsapp: true },
        { label: `${tr("contact.shopTitle")} 1`, phone: b.contacts?.shop1?.phone, whatsapp: false },
        { label: `${tr("contact.shopTitle")} 2`, phone: b.contacts?.shop2?.phone, whatsapp: false }
      ];
      secondary.innerHTML = list.map((item) => `
        <div class="secondary-contact-row">
          <div><small>${item.label}</small><strong>${formatPhone(item.phone)}</strong></div>
          <div class="contact-mini-actions">
            ${item.whatsapp ? `<a class="icon-btn" href="${waUrl(item.phone, b.contacts?.bdr?.whatsappMessage || messages().supplierWhatsApp)}" target="_blank" rel="noopener noreferrer" aria-label="${tr("ui.whatsapp")}: ${item.label}" title="${tr("ui.whatsapp")}">${svgIcon("message")}</a>` : ""}
            ${smallActionButton("call", item.phone, item.label)}
            ${smallActionButton("copy", item.phone, item.label)}
          </div>
        </div>`).join("");
    }
  }

  function updateActionLinks() {
    const b = business();
    const primaryWa = waUrl(b.primaryContact?.phone, messages().primaryWhatsApp);
    const supplierWa = waUrl(b.primaryContact?.phone, messages().supplierWhatsApp);

    document.querySelectorAll("[data-action='whatsapp-primary']").forEach((el) => {
      el.href = primaryWa;
      el.target = "_blank";
      el.rel = "noopener noreferrer";
    });
    document.querySelectorAll("[data-action='whatsapp-supplier']").forEach((el) => {
      el.href = supplierWa;
      el.target = "_blank";
      el.rel = "noopener noreferrer";
    });
    document.querySelectorAll("[data-action='call-primary']").forEach((el) => { el.href = callUrl(b.primaryContact?.phone); });
    document.querySelectorAll("[data-action='call-bdr']").forEach((el) => { el.href = callUrl(b.contacts?.bdr?.phone); });
    document.querySelectorAll("[data-action='map']").forEach((el) => {
      el.href = b.maps || "#location";
      el.target = "_blank";
      el.rel = "noopener noreferrer";
    });
    document.querySelectorAll("[data-action='email']").forEach((el) => { el.href = emailUrl(); });
  }

  function updateStructuredData() {
    const b = business();
    const target = document.querySelector("#local-business-jsonld");
    if (!target) return;
    const payload = {
      "@context": "https://schema.org",
      "@type": "Store",
      name: b.name,
      description: "Fresh vegetables, wholesale supply and business enquiries from Sri Durga Malleswara Wholesale Vegetable Market, Nunna.",
      url: data().SITE_SETTINGS?.canonicalUrl,
      telephone: `+91${b.primaryContact?.phone}`,
      email: b.email,
      address: {
        "@type": "PostalAddress",
        streetAddress: `${b.address?.market}, ${b.address?.road}`,
        addressLocality: b.address?.locality,
        addressRegion: b.address?.state,
        postalCode: b.address?.pincode,
        addressCountry: "IN"
      },
      hasMap: b.maps
    };
    target.textContent = JSON.stringify(payload);
  }

  function renderAll() {
    setBusinessText();
    renderHighlights();
    renderWholesale();
    renderWhy();
    renderProducts();
    renderAudience();
    renderContacts();
    updateActionLinks();
    updateStructuredData();
    i18n()?.applyTranslations?.(document);
    window.BDRAnimations?.refresh?.();
  }

  function showToast(message) {
    const toast = document.querySelector("#toast");
    if (!toast) return;
    toast.textContent = message || tr("ui.copied");
    toast.classList.add("is-visible");
    clearTimeout(showToast.timer);
    showToast.timer = setTimeout(() => toast.classList.remove("is-visible"), 1800);
  }

  async function copyPhone(phone) {
    const value = String(phone || "").replace(/\D/g, "");
    if (!value) return;
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(value);
      } else {
        const input = document.createElement("textarea");
        input.value = value;
        input.setAttribute("readonly", "");
        input.style.position = "fixed";
        input.style.opacity = "0";
        document.body.appendChild(input);
        input.select();
        document.execCommand("copy");
        input.remove();
      }
      showToast(tr("ui.copied"));
    } catch {
      showToast(value);
    }
  }

  function initDelegatedActions() {
    document.addEventListener("click", (event) => {
      const copyButton = event.target.closest?.("[data-copy-phone]");
      if (copyButton) {
        event.preventDefault();
        copyPhone(copyButton.dataset.copyPhone);
      }
    });
  }

  function initHeader() {
    const header = document.querySelector("#site-header");
    if (!header) return;
    const update = () => header.classList.toggle("is-scrolled", window.scrollY > 18);
    update();
    window.addEventListener("scroll", update, { passive: true });
  }

  function initMobileMenu() {
    const overlay = document.querySelector("#menu-overlay");
    const openButton = document.querySelector("#menu-button");
    const closeButton = document.querySelector("#menu-close");
    const backdrop = overlay?.querySelector(".menu-backdrop");
    if (!overlay || !openButton || !closeButton) return;

    let previousFocus = null;

    const focusables = () => Array.from(overlay.querySelectorAll('a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'))
      .filter((el) => !el.hasAttribute("hidden") && el.offsetParent !== null);

    const close = ({ restoreFocus = true } = {}) => {
      if (!overlay.classList.contains("is-open")) return;
      overlay.classList.remove("is-open");
      overlay.setAttribute("aria-hidden", "true");
      openButton.setAttribute("aria-expanded", "false");
      document.body.classList.remove("menu-open");
      if (restoreFocus) previousFocus?.focus?.();
    };

    const open = () => {
      previousFocus = document.activeElement;
      overlay.classList.add("is-open");
      overlay.setAttribute("aria-hidden", "false");
      openButton.setAttribute("aria-expanded", "true");
      document.body.classList.add("menu-open");
      requestAnimationFrame(() => closeButton.focus());
    };

    openButton.addEventListener("click", open);
    closeButton.addEventListener("click", () => close());
    backdrop?.addEventListener("click", () => close());

    overlay.addEventListener("click", (event) => {
      if (event.target.closest("a[href^='#']")) close({ restoreFocus: false });
    });

    document.addEventListener("keydown", (event) => {
      if (!overlay.classList.contains("is-open")) return;
      if (event.key === "Escape") {
        event.preventDefault();
        close();
        return;
      }
      if (event.key !== "Tab") return;
      const items = focusables();
      if (!items.length) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    });

    const desktopQuery = window.matchMedia("(min-width: 1181px)");
    const onDesktopChange = (event) => {
      if (event.matches) close({ restoreFocus: false });
    };
    desktopQuery.addEventListener?.("change", onDesktopChange);
    window.addEventListener("orientationchange", () => setTimeout(() => {
      if (window.innerWidth >= 1181) close({ restoreFocus: false });
    }, 50));
  }

  function initActiveNavigation() {
    if (!("IntersectionObserver" in window)) return;
    const sections = Array.from(document.querySelectorAll("main section[id]"));
    const navLinks = Array.from(document.querySelectorAll(".nav-link[href^='#']"));
    if (!sections.length || !navLinks.length) return;

    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (!visible) return;
      const id = `#${visible.target.id}`;
      navLinks.forEach((link) => link.classList.toggle("is-active", link.getAttribute("href") === id));
    }, { rootMargin: "-34% 0px -55% 0px", threshold: [0.01, 0.15, 0.4] });

    sections.forEach((section) => observer.observe(section));
  }

  function init() {
    window.BDRTheme?.init?.();
    window.BDRLanguage?.init?.();
    initDelegatedActions();
    initHeader();
    initMobileMenu();
    initActiveNavigation();
    renderAll();

    window.addEventListener("bdr:languagechange", () => renderAll());
  }

  window.BDRApp = { init, renderAll, waUrl, formatPhone, svgIcon };
  document.addEventListener("DOMContentLoaded", init, { once: true });
})();
