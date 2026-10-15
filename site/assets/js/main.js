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
    initCategoryFilters();
    initImageLightbox();
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

  function initCategoryFilters() {
    document.querySelectorAll("[data-category-filter]").forEach((filterRoot) => {
      const options = [...filterRoot.querySelectorAll("[data-category-option]")];
      const items = [...filterRoot.querySelectorAll("[data-category-item]")];
      const groups = [...filterRoot.querySelectorAll("[data-filter-group]")];
      const status = filterRoot.querySelector("[data-filter-status]");
      const singular = filterRoot.dataset.filterSingular || "item";
      const plural = filterRoot.dataset.filterPlural || "items";

      if (!options.length || !items.length) return;

      function applyFilter(requestedCategory, updateUrl) {
        const category = options.some(
          (option) => option.dataset.categoryOption === requestedCategory
        )
          ? requestedCategory
          : "all";

        let visibleCount = 0;

        items.forEach((item) => {
          const categories = (item.dataset.categories || "").split(/\s+/);
          const isVisible =
            category === "all" || categories.includes(category);
          item.hidden = !isVisible;
          if (isVisible) visibleCount += 1;
        });

        groups.forEach((group) => {
          group.hidden = !group.querySelector("[data-category-item]:not([hidden])");
        });

        options.forEach((option) => {
          const isSelected = option.dataset.categoryOption === category;
          option.setAttribute("aria-pressed", String(isSelected));
        });

        if (status) {
          status.textContent = `Showing ${visibleCount} ${
            visibleCount === 1 ? singular : plural
          }.`;
        }

        if (updateUrl) {
          const url = new URL(window.location.href);
          if (category === "all") {
            url.searchParams.delete("category");
          } else {
            url.searchParams.set("category", category);
          }
          window.history.replaceState({}, "", url);
        }
      }

      options.forEach((option) => {
        option.addEventListener("click", () => {
          applyFilter(option.dataset.categoryOption || "all", true);
        });
      });

      const initialCategory =
        new URL(window.location.href).searchParams.get("category") || "all";
      applyFilter(initialCategory, false);
    });
  }

  function initImageLightbox() {
    const images = [
      ...document.querySelectorAll(".article-hero img, .prose img"),
    ].filter((image) => !image.closest("a, button"));

    if (!images.length || typeof HTMLDialogElement === "undefined") return;

    const dialog = document.createElement("dialog");
    dialog.className = "image-lightbox";
    dialog.setAttribute("aria-label", "Expanded image view");
    dialog.innerHTML = `
      <div class="image-lightbox__controls">
        <button type="button" class="image-lightbox__control" data-lightbox-zoom-out aria-label="Zoom out">−</button>
        <button type="button" class="image-lightbox__level" data-lightbox-reset aria-label="Reset zoom">
          <span data-lightbox-level>100%</span>
        </button>
        <button type="button" class="image-lightbox__control" data-lightbox-zoom-in aria-label="Zoom in">+</button>
        <button type="button" class="image-lightbox__control image-lightbox__close" data-lightbox-close aria-label="Close image view">×</button>
      </div>
      <div class="image-lightbox__viewport" data-lightbox-viewport>
        <div class="image-lightbox__stage" data-lightbox-stage>
          <img class="image-lightbox__image" data-lightbox-image alt="">
        </div>
      </div>
    `;
    document.body.append(dialog);

    const viewport = dialog.querySelector("[data-lightbox-viewport]");
    const stage = dialog.querySelector("[data-lightbox-stage]");
    const expandedImage = dialog.querySelector("[data-lightbox-image]");
    const zoomOutButton = dialog.querySelector("[data-lightbox-zoom-out]");
    const zoomInButton = dialog.querySelector("[data-lightbox-zoom-in]");
    const resetButton = dialog.querySelector("[data-lightbox-reset]");
    const closeButton = dialog.querySelector("[data-lightbox-close]");
    const levelLabel = dialog.querySelector("[data-lightbox-level]");
    let zoomLevel = 1;
    let lastTrigger = null;

    function renderZoom(centerView) {
      if (!expandedImage.naturalWidth || !expandedImage.naturalHeight) return;

      const previousWidth = viewport.scrollWidth;
      const previousHeight = viewport.scrollHeight;
      const horizontalCenter =
        previousWidth > 0
          ? (viewport.scrollLeft + viewport.clientWidth / 2) / previousWidth
          : 0.5;
      const verticalCenter =
        previousHeight > 0
          ? (viewport.scrollTop + viewport.clientHeight / 2) / previousHeight
          : 0.5;
      const viewportStyles = window.getComputedStyle(viewport);
      const horizontalPadding =
        parseFloat(viewportStyles.paddingLeft) +
        parseFloat(viewportStyles.paddingRight);
      const verticalPadding =
        parseFloat(viewportStyles.paddingTop) +
        parseFloat(viewportStyles.paddingBottom);
      const availableWidth = Math.max(
        viewport.clientWidth - horizontalPadding,
        1
      );
      const availableHeight = Math.max(
        viewport.clientHeight - verticalPadding,
        1
      );
      const fitScale = Math.min(
        availableWidth / expandedImage.naturalWidth,
        availableHeight / expandedImage.naturalHeight,
        1
      );
      const renderedScale = fitScale * zoomLevel;
      const renderedWidth = Math.max(
        Math.round(expandedImage.naturalWidth * renderedScale),
        1
      );
      const renderedHeight = Math.max(
        Math.round(expandedImage.naturalHeight * renderedScale),
        1
      );

      stage.style.width = `${renderedWidth}px`;
      stage.style.height = `${renderedHeight}px`;
      stage.style.marginTop = `${Math.max(
        (availableHeight - renderedHeight) / 2,
        0
      )}px`;
      levelLabel.textContent = `${Math.round(zoomLevel * 100)}%`;
      zoomOutButton.disabled = zoomLevel <= 1;
      zoomInButton.disabled = zoomLevel >= 4;
      expandedImage.classList.toggle("is-zoomed", zoomLevel > 1);

      requestAnimationFrame(() => {
        if (centerView) {
          viewport.scrollLeft = (viewport.scrollWidth - viewport.clientWidth) / 2;
          viewport.scrollTop = (viewport.scrollHeight - viewport.clientHeight) / 2;
          return;
        }

        viewport.scrollLeft =
          horizontalCenter * viewport.scrollWidth - viewport.clientWidth / 2;
        viewport.scrollTop =
          verticalCenter * viewport.scrollHeight - viewport.clientHeight / 2;
      });
    }

    function setZoom(nextZoom, centerView = false) {
      zoomLevel = Math.min(4, Math.max(1, nextZoom));
      renderZoom(centerView);
    }

    function openLightbox(sourceImage, trigger) {
      lastTrigger = trigger;
      zoomLevel = 1;
      expandedImage.src = sourceImage.currentSrc || sourceImage.src;
      expandedImage.alt = sourceImage.alt;
      dialog.showModal();

      if (expandedImage.complete) {
        renderZoom(true);
      } else {
        expandedImage.addEventListener("load", () => renderZoom(true), {
          once: true,
        });
      }

      closeButton.focus();
    }

    images.forEach((image) => {
      const trigger = document.createElement("button");
      const imageDescription = image.alt
        ? `Open larger view: ${image.alt}`
        : "Open image in a larger view";

      trigger.type = "button";
      trigger.className = "image-zoom-trigger";
      trigger.setAttribute("aria-label", imageDescription);
      image.parentNode.insertBefore(trigger, image);
      trigger.append(image);
      trigger.addEventListener("click", () => openLightbox(image, trigger));
    });

    zoomOutButton.addEventListener("click", () => setZoom(zoomLevel - 0.5));
    zoomInButton.addEventListener("click", () => setZoom(zoomLevel + 0.5));
    resetButton.addEventListener("click", () => setZoom(1, true));
    closeButton.addEventListener("click", () => dialog.close());
    expandedImage.addEventListener("click", () => {
      setZoom(zoomLevel === 1 ? 2 : 1, zoomLevel !== 1);
    });
    viewport.addEventListener("click", (event) => {
      if (event.target === viewport) dialog.close();
    });
    dialog.addEventListener("keydown", (event) => {
      if (event.key === "+" || event.key === "=") {
        event.preventDefault();
        setZoom(zoomLevel + 0.5);
      } else if (event.key === "-") {
        event.preventDefault();
        setZoom(zoomLevel - 0.5);
      } else if (event.key === "0") {
        event.preventDefault();
        setZoom(1, true);
      }
    });
    dialog.addEventListener("close", () => {
      expandedImage.removeAttribute("src");
      stage.removeAttribute("style");
      lastTrigger?.focus();
    });
    window.addEventListener("resize", () => {
      if (dialog.open) renderZoom(true);
    });
  }

})();
