import eleventyNavigationPlugin from "@11ty/eleventy-navigation";

export default function (cfg) {
  cfg.addPlugin(eleventyNavigationPlugin);

  cfg.addPassthroughCopy("src/favicon.ico");
  cfg.addPassthroughCopy("src/css/");
  cfg.addPassthroughCopy("src/js/");
  cfg.addPassthroughCopy("src/assets/");

  cfg.addShortcode("currentYear", () => `${new Date().getFullYear()}`);

  return {
    dir: {
      input: "src",
      output: "dist",
      includes: "_includes",
      data: "_data",
    },
  };
}
