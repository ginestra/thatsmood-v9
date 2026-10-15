function categoryList(value) {
  const values = Array.isArray(value) ? value : String(value || "").split(",");
  const seen = new Set();

  return values
    .map((category) => String(category).trim())
    .filter((category) => {
      const key = category.toLocaleLowerCase("en-GB");
      if (!category || seen.has(key)) return false;
      seen.add(key);
      return true;
    });
}

function categorySlug(value) {
  return String(value || "")
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLocaleLowerCase("en-GB")
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function collectionCategories(collection = []) {
  const categories = new Map();

  collection.forEach((item) => {
    categoryList(item.data?.category).forEach((name) => {
      const slug = categorySlug(name);
      if (slug && !categories.has(slug)) categories.set(slug, { name, slug });
    });
  });

  return [...categories.values()].sort((a, b) =>
    a.name.localeCompare(b.name, "en-GB")
  );
}

export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({
    "public/assets": "assets",
    "public/gi-favicon.svg": "gi-favicon.svg",
    "public/gi-favicon.png": "gi-favicon.png",
    "public/gi-site-preview.png": "gi-site-preview.png",
  });
  eleventyConfig.addPassthroughCopy({
    "site/assets/css": "assets/css",
    "site/assets/js": "assets/js",
  });

  eleventyConfig.addCollection("projects", (collectionApi) => {
    return collectionApi.getFilteredByTag("projects").sort((a, b) => {
      return (a.data.id || 0) - (b.data.id || 0);
    });
  });

  eleventyConfig.addCollection("thoughts", (collectionApi) => {
    return collectionApi
      .getFilteredByTag("thoughts")
      .sort((a, b) => b.date - a.date);
  });

  eleventyConfig.addFilter("readableDate", (dateObj) => {
    return new Date(dateObj).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  });

  eleventyConfig.addFilter("categoryList", categoryList);
  eleventyConfig.addFilter("categorySlug", categorySlug);
  eleventyConfig.addFilter("collectionCategories", collectionCategories);

  eleventyConfig.addShortcode("currentYear", () =>
    String(new Date().getFullYear())
  );

  eleventyConfig.addFilter("isActiveNav", (currentUrl, navPath) => {
    const normalizedCurrent =
      currentUrl === "/" ? "/" : currentUrl.replace(/\/$/, "") + "/";
    const normalizedNav =
      navPath === "/" ? "/" : navPath.replace(/\/$/, "") + "/";

    if (navPath === "/") {
      return normalizedCurrent === "/";
    }

    return normalizedCurrent.startsWith(normalizedNav);
  });

  return {
    dir: {
      input: "site",
      output: "_site",
      includes: "_includes",
      data: "_data",
    },
    pathPrefix: "/thatsmood-v9/",
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
  };
}
