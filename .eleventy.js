const pluginRss = require("@11ty/eleventy-plugin-rss");
const { DateTime } = require("luxon");
const pluginSEO = require("eleventy-plugin-seo");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(pluginRss);
  eleventyConfig.addPassthroughCopy('css');
  eleventyConfig.addPassthroughCopy('images');
  eleventyConfig.setFrontMatterParsingOptions({
    excerpt: true
  });

  eleventyConfig.addPlugin(pluginSEO, {
    title: "Amateur Radio Daily | Ham Radio News",
    description: "A daily log of Ham Radio related news stories.",
    url: "https://daily.hamweekly.com",
    author: "K4HCK",
    twitter: "hamweekly",
    image: "/images/amateur-radio-daily.png",
    options: {
      titleStyle: "minimalistic"
    }
  });

  eleventyConfig.addFilter("filterTagList", tags => {
    return (tags || []).filter(tag => ["all", "nav", "post", "posts"].indexOf(tag) === -1);
  });

  eleventyConfig.addFilter("formatDate", dateObj => {
    return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat("LLLL d, yyyy");
  });

  eleventyConfig.addFilter("formatDisqusDate", dateObj => {
    return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat("yyyy/MM");
  });

  eleventyConfig.addCollection("tagList", function(collection) {
    let tagSet = new Set();
    collection.getAll().forEach(item => {
      (item.data.tags || []).forEach(tag => tagSet.add(tag));
    });
    return [...tagSet];
  });

  return {
    passthroughFileCopy: true,
    dir: {
      input: "./",
      output: "./_site"
    }
  }
};
