module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("css");
    eleventyConfig.addPassthroughCopy("icons"); // Добавьте эту строку
    return {
      dir: {
        input: ".",
        output: "_site"
      }
    };
  };