import js from "@eslint/js";

export default [
  js.configs.recommended,
  {
    files: ["**/*.js", "**/*.njk", "**/*.md"],
    plugins: {
      html: require("eslint-plugin-html"),
    },
    rules: {
      // Отключаем проверку для markdown-файлов
      "no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
      "no-console": "warn",
    },
  },
];
