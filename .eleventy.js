module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("css");
    eleventyConfig.addPassthroughCopy("assets");
    eleventyConfig.addPassthroughCopy("icons");
    return {
      dir: {
        input: ".",
        output: "_site"
      }
    };
  };