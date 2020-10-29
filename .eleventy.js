module.exports = function(eleventyConfig) {
  // Come servire risorse statiche
  // https://www.11ty.dev/docs/copy/#manual-passthrough-file-copy-(faster)
  eleventyConfig.addPassthroughCopy("visual");

  // This will use something like lodash.mergewith to combine Arrays and deep merge Objects,
  // rather than a simple top-level merge using Object.assign.
  // https://www.11ty.dev/docs/data-deep-merge/
  eleventyConfig.setDataDeepMerge(true);

  // Questa collezione custom prende i documenti che hanno il tag 
  // relativo al mese corrente (es.: `featured202008`) e ne tiene 
  // solo i primi 3.
  eleventyConfig.addCollection("featuredActivity", function(collectionApi) {
    let now = new Date();
    let month = `${now.getMonth() + 1}`.padStart(2, "0");
    let featuredTag = `featured${now.getFullYear()}${month}`;
    return collectionApi.getFilteredByTags(featuredTag).slice(0, 3);
  });
};