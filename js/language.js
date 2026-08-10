(() => {
  "use strict";

  const fallbackKey = "bdr-language";
  const settings = () => window.BDR_DATA?.SITE_SETTINGS || {};
  const dictionaries = () => window.BDR_TRANSLATIONS || {};

  function getByPath(object, path) {
    return String(path || "")
      .split(".")
      .filter(Boolean)
      .reduce((value, key) => (value && Object.prototype.hasOwnProperty.call(value, key) ? value[key] : undefined), object);
  }

  function storedLanguage() {
    try {
      const value = localStorage.getItem(settings().languageStorageKey || fallbackKey);
      return value === "te" || value === "en" ? value : null;
    } catch {
      return null;
    }
  }

  function currentLanguage() {
    return document.documentElement.dataset.language === "te" ? "te" : "en";
  }

  function t(path, lang = currentLanguage()) {
    const direct = getByPath(dictionaries()[lang], path);
    if (direct !== undefined) return direct;
    const fallback = getByPath(dictionaries().en, path);
    return fallback !== undefined ? fallback : path;
  }

  function applyTranslations(root = document) {
    root.querySelectorAll?.("[data-i18n]").forEach((element) => {
      const value = t(element.dataset.i18n);
      if (typeof value === "string") element.textContent = value;
    });

    root.querySelectorAll?.("[data-i18n-aria]").forEach((element) => {
      const value = t(element.dataset.i18nAria);
      if (typeof value === "string") element.setAttribute("aria-label", value);
    });

    root.querySelectorAll?.("[data-i18n-title]").forEach((element) => {
      const value = t(element.dataset.i18nTitle);
      if (typeof value === "string") element.setAttribute("title", value);
    });
  }

  function updateControls(lang) {
    document.querySelectorAll("[data-language-choice]").forEach((button) => {
      button.setAttribute("aria-pressed", String(button.dataset.languageChoice === lang));
    });
  }

  function setLanguage(language, { persist = true, emit = true } = {}) {
    const lang = language === "te" ? "te" : "en";
    document.documentElement.lang = lang;
    document.documentElement.dataset.language = lang;
    updateControls(lang);
    applyTranslations(document);

    if (persist) {
      try {
        localStorage.setItem(settings().languageStorageKey || fallbackKey, lang);
      } catch {
        // Ignore unavailable storage; language remains active for this visit.
      }
    }

    if (emit) {
      window.dispatchEvent(new CustomEvent("bdr:languagechange", { detail: { language: lang } }));
    }
  }

  function init() {
    const saved = storedLanguage();
    const defaultLanguage = settings().defaultLanguage === "te" ? "te" : "en";
    setLanguage(saved || defaultLanguage, { persist: Boolean(saved), emit: false });

    document.querySelectorAll("[data-language-choice]").forEach((button) => {
      button.addEventListener("click", () => setLanguage(button.dataset.languageChoice));
    });
  }

  window.BDRLanguage = {
    init,
    setLanguage,
    currentLanguage,
    t,
    applyTranslations
  };
})();
