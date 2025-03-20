module.exports = function (eleventyConfig) {
  // Копируем стили, иконки и изображения
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy("icons");

  return {
    dir: {
      input: ".",
      output: "_site",
    },
    // Настройка базового пути для GitHub Pages
    pathPrefix: "/",
  };
};
