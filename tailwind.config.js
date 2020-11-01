const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    fontFamily: {
      title: ["Aviano", ...defaultTheme.fontFamily.serif],
      subtitle: ["PT Sans", ...defaultTheme.fontFamily.sans],
      body: ["Futura", ...defaultTheme.fontFamily.sans]
    },
    extend: {
      fontSize: {
        "7xl": "5rem"
      }
    }
  },
  variants: {},
  plugins: []
};
