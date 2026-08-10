(() => {
  "use strict";

  const fallbackKey = "bdr-theme";
  const settings = () => window.BDR_DATA?.SITE_SETTINGS || {};

  function systemTheme() {
    return window.matchMedia?.("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }

  function storedTheme() {
    try {
      const value = localStorage.getItem(settings().themeStorageKey || fallbackKey);
      return value === "light" || value === "dark" ? value : null;
    } catch {
      return null;
    }
  }

  function currentTheme() {
    const value = document.documentElement.dataset.theme;
    return value === "dark" ? "dark" : "light";
  }

  function updateControls(theme) {
    document.querySelectorAll("[data-theme-choice]").forEach((button) => {
      button.setAttribute("aria-pressed", String(button.dataset.themeChoice === theme));
    });

    document.querySelectorAll("[data-theme-toggle]").forEach((button) => {
      const next = theme === "dark" ? "light" : "dark";
      button.dataset.nextTheme = next;
      button.setAttribute("aria-label", next === "dark" ? "Switch to dark theme" : "Switch to light theme");
      button.setAttribute("title", next === "dark" ? "Dark mode" : "Light mode");
    });
  }

  function updateThemeColor(theme) {
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", theme === "dark" ? "#08110C" : "#FFFDF7");
  }

  function setTheme(theme, { persist = true, emit = true } = {}) {
    const resolved = theme === "dark" ? "dark" : "light";
    document.documentElement.dataset.theme = resolved;
    updateControls(resolved);
    updateThemeColor(resolved);

    if (persist) {
      try {
        localStorage.setItem(settings().themeStorageKey || fallbackKey, resolved);
      } catch {
        // Storage can be unavailable in private/restricted browsing; UI still works.
      }
    }

    if (emit) {
      window.dispatchEvent(new CustomEvent("bdr:themechange", { detail: { theme: resolved } }));
    }
  }

  function init() {
    const saved = storedTheme();
    const initial = saved || currentTheme() || systemTheme();
    setTheme(initial, { persist: Boolean(saved), emit: false });

    document.querySelectorAll("[data-theme-toggle]").forEach((button) => {
      button.addEventListener("click", () => {
        setTheme(currentTheme() === "dark" ? "light" : "dark");
      });
    });

    document.querySelectorAll("[data-theme-choice]").forEach((button) => {
      button.addEventListener("click", () => setTheme(button.dataset.themeChoice));
    });

    const media = window.matchMedia?.("(prefers-color-scheme: dark)");
    media?.addEventListener?.("change", (event) => {
      if (!storedTheme()) setTheme(event.matches ? "dark" : "light", { persist: false });
    });
  }

  window.BDRTheme = { init, setTheme, currentTheme };
})();
