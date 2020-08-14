module.exports = function(eleventyConfig) {
    // Output directory: _site
  
    eleventyConfig.addPassthroughCopy("visual");

    eleventyConfig.addCollection("featuredActivity", function(collectionApi) {
      let now = new Date();
      let month = `${now.getMonth() + 1}`.padStart(2, "0");
      let featuredTag = `featured${now.getFullYear()}${month}`;
      return collectionApi.getFilteredByTags(featuredTag).slice(0, 3);
    });
  };