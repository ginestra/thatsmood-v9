(function () {
  const storageKey = "ux-portfolio-theme";

  function getStoredTheme() {
    return localStorage.getItem(storageKey) || "system";
  }

  function applyTheme(theme) {
    const root = document.documentElement;
    root.classList.remove("light", "dark");

    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";
      root.classList.add(systemTheme);
      return;
    }

    root.classList.add(theme);
  }

  function setTheme(theme) {
    localStorage.setItem(storageKey, theme);
    applyTheme(theme);
  }

  applyTheme(getStoredTheme());

  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", () => {
      if (getStoredTheme() === "system") {
        applyTheme("system");
      }
    });

  document.addEventListener("DOMContentLoaded", () => {
    initThemeToggle();
    initMobileNav();
  });

  function initThemeToggle() {
    const toggles = document.querySelectorAll("[data-theme-toggle]");

    function closeToggle(toggle) {
      toggle.querySelector("[data-theme-menu]")?.classList.remove("is-open");
      toggle
        .querySelector("[data-theme-trigger]")
        ?.setAttribute("aria-expanded", "false");
    }

    toggles.forEach((toggle) => {
      const trigger = toggle.querySelector("[data-theme-trigger]");
      const menu = toggle.querySelector("[data-theme-menu]");
      const options = toggle.querySelectorAll("[data-theme-option]");

      trigger?.addEventListener("click", (event) => {
        event.stopPropagation();
        const willOpen = !menu?.classList.contains("is-open");
        toggles.forEach(closeToggle);
        menu?.classList.toggle("is-open", willOpen);
        trigger.setAttribute("aria-expanded", String(willOpen));
      });

      options.forEach((option) => {
        option.addEventListener("click", () => {
          const theme = option.getAttribute("data-theme-option");
          if (theme) {
            setTheme(theme);
          }
          closeToggle(toggle);
        });
      });
    });

    document.addEventListener("click", (event) => {
      toggles.forEach((toggle) => {
        if (!toggle.contains(event.target)) closeToggle(toggle);
      });
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") toggles.forEach(closeToggle);
    });
  }

  function initMobileNav() {
    const toggle = document.querySelector("[data-nav-toggle]");
    const menu = document.querySelector("[data-nav-menu]");
    if (!toggle || !menu) return;

    toggle.addEventListener("click", () => {
      const isOpen = menu.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(isOpen));
      toggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
    });

    menu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        menu.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.setAttribute("aria-label", "Open menu");
      });
    });
  }

})();
