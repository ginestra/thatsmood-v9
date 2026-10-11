export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({
    "public/assets": "assets",
    "public/gi-favicon.svg": "gi-favicon.svg",
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
