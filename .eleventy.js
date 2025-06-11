const { DateTime } = require("luxon");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const markdownIt = require("markdown-it");
const markdownItKatex = require("markdown-it-katex");

module.exports = function (eleventyConfig) {
  // --- Plugins ---
  eleventyConfig.addPlugin(syntaxHighlight);

  // --- Custom Markdown Library ---
  const md = markdownIt({
    html: true,
    breaks: true,
    linkify: true,
  }).use(markdownItKatex);
  eleventyConfig.setLibrary("md", md);

  // --- Passthrough Copies ---
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("js");
  eleventyConfig.addPassthroughCopy("img");

  // --- Date Formatting Filters ---
  eleventyConfig.addFilter("readableDate", (dateObj) => {
    // Correct format: "Month Day, Year" e.g., "June 11, 2025"
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat(
      "LLLL d, yyyy",
    );
  });

  eleventyConfig.addFilter("htmlDateString", (dateObj) => {
    // Correct format: "YYYY-MM-DD" e.g., "2025-06-11"
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat("yyyy-LL-dd");
  });

  return {
    passthroughFileCopy: true,
    dir: {
      input: ".",
      includes: "_includes",
      output: "_site",
    },
    htmlTemplateEngine: "njk",
  };
};
