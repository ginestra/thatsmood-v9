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
    initTabs();
  });

  function initThemeToggle() {
    const toggle = document.querySelector("[data-theme-toggle]");
    if (!toggle) return;

    const trigger = toggle.querySelector("[data-theme-trigger]");
    const menu = toggle.querySelector("[data-theme-menu]");
    const options = toggle.querySelectorAll("[data-theme-option]");

    trigger?.addEventListener("click", (event) => {
      event.stopPropagation();
      menu?.classList.toggle("is-open");
    });

    options.forEach((option) => {
      option.addEventListener("click", () => {
        const theme = option.getAttribute("data-theme-option");
        if (theme) {
          setTheme(theme);
        }
        menu?.classList.remove("is-open");
      });
    });

    document.addEventListener("click", (event) => {
      if (!toggle.contains(event.target)) {
        menu?.classList.remove("is-open");
      }
    });
  }

  function initMobileNav() {
    const toggle = document.querySelector("[data-nav-toggle]");
    const menu = document.querySelector("[data-nav-menu]");
    if (!toggle || !menu) return;

    toggle.addEventListener("click", () => {
      const isOpen = menu.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });

    menu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        menu.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  function initTabs() {
    document.querySelectorAll("[data-tabs]").forEach((tabsRoot) => {
      const triggers = tabsRoot.querySelectorAll("[data-tab-trigger]");
      const panels = tabsRoot.querySelectorAll("[data-tab-panel]");

      triggers.forEach((trigger) => {
        trigger.addEventListener("click", () => {
          const target = trigger.getAttribute("data-tab-trigger");
          if (!target) return;

          triggers.forEach((item) => {
            item.setAttribute(
              "aria-selected",
              item === trigger ? "true" : "false"
            );
          });

          panels.forEach((panel) => {
            panel.classList.toggle(
              "is-active",
              panel.getAttribute("data-tab-panel") === target
            );
          });
        });
      });
    });
  }
})();
