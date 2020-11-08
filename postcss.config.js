module.exports = {
  plugins: [
    require("postcss-import"),
    require("tailwindcss")("./tailwind.config.js"),
    require("postcss-preset-env")({
      stage: 1,
      features: {
        'nesting-rules': true,
        "color-mod-function": {
          unresolved: "warn"
        }
      }
    })
  ]
};
