module.exports = function(eleventyConfig) {
    return {
      dir: {
        input: ".",        // Папка с исходными файлами (по умолчанию ".")
        output: "docs",     // Папка для сгенерированного сайта (изменим на "docs" для GitHub Pages)
        includes: "_includes", // Папка с шаблонами
        data: "_data"       // Папка с данными (если нужна)
      }
    };
  };