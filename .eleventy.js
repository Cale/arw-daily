const pluginRss = require("@11ty/eleventy-plugin-rss");
const { DateTime } = require("luxon");
const pluginSEO = require("eleventy-plugin-seo");
const now = new Date();
const livePosts = p => p.date <= now;
const recentPosts = function(p) {
  if (p.date >= DateTime.now().minus({days: 2}) && p.date <= now) {
    return p.date
  }
}

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(pluginRss);
  eleventyConfig.addPassthroughCopy('css');
  eleventyConfig.addPassthroughCopy('js');
  eleventyConfig.addPassthroughCopy('images');
  eleventyConfig.addPassthroughCopy('newsletters');
  eleventyConfig.setFrontMatterParsingOptions({
    excerpt: true
  });

  eleventyConfig.addPlugin(pluginSEO, {
    title: "Amateur Radio Daily | Ham Radio News",
    description: "A daily log of Ham Radio related news stories.",
    url: "https://daily.hamweekly.com",
    author: "K4HCK Cale",
    twitter: "hamweekly",
    image: "/images/amateur-radio-daily.png",
    options: {
      titleStyle: "minimalistic"
    }
  });

  eleventyConfig.addFilter("filterScheduledPosts", scheduled => {
    return scheduled.filter(livePosts);
  });

  eleventyConfig.addFilter("filterTagList", tags => {
    return (tags || []).filter(tag => ["post", "posts", "event", "emailarchive"].indexOf(tag) === -1);
  });

  eleventyConfig.addFilter("formatDate", dateObj => {
    return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat("LLLL d, yyyy");
  });

  eleventyConfig.addFilter("formatDisqusDate", dateObj => {
    return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat("yyyy/MM");
  });

  eleventyConfig.addFilter('formatISO8601Date', dateObj => {
    return DateTime.fromJSDate(dateObj, { zone: 'utc' }).toISO();
  });

  eleventyConfig.addFilter("formatSitemapDate", dateObj => {
    return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat("yyyy-MM-dd");
  });

  eleventyConfig.addFilter("limit", function(array, limit) {
    return array.slice(0, limit);
  });

  eleventyConfig.addCollection("recentNews", collection => {
    return collection.getFilteredByGlob('./_posts/*.md')
      .filter(recentPosts).reverse();
  });

  eleventyConfig.addCollection("posts", collection => {
    return collection.getFilteredByGlob('./_posts/*.md')
      .filter(livePosts).reverse();
  });

  eleventyConfig.addCollection("links", collection => {
    const links = collection.getFilteredByGlob('./_links/*.md')
      .sort((a, b) => {
        return Number(a.data.order) - Number(b.data.order)
      })
    return links;
  });

  eleventyConfig.addCollection("events", function (collectionsApi) {
		const events = collectionsApi.getFilteredByTag("event").sort((a, b) => a.data.eventdate - b.data.eventdate)
    return events.reverse();
	});

  eleventyConfig.addCollection("futureevents", function (collectionsApi) {
		const events = collectionsApi.getFilteredByTag("event").sort((a, b) => a.data.eventdate - b.data.eventdate).filter(event => {return event && event.data.eventdate >= now;})
    return events;
	});

  eleventyConfig.addCollection("tagList", function(collection) {
    let tagSet = new Set();
    collection.getAll().filter(livePosts).forEach(item => {
      (item.data.tags || []).forEach(tag => tagSet.add(tag));
    });
    return [...tagSet];
  });

  eleventyConfig.addCollection("newsletterArchive", function (collectionsApi) {
		const newsletters = collectionsApi.getFilteredByTag("emailarchive")
    return newsletters.reverse();
	});

  eleventyConfig.addPassthroughCopy({ "images/favicon.png": "/" });

  return {
    passthroughFileCopy: true,
    dir: {
      input: "./",
      output: "./_site"
    }
  }
};
