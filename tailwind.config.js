const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    screens: {
      xs: "360px",
      ...defaultTheme.screens
    },
    fontFamily: {
      title: ["Aviano", ...defaultTheme.fontFamily.serif],
      subtitle: ["PT Sans", ...defaultTheme.fontFamily.sans],
      body: ["Futura", ...defaultTheme.fontFamily.sans]
    },
    extend: {
      spacing: {
        "72": "18rem",
        "84": "21rem",
        "96": "24rem"
      },
      fontSize: {
        "7xl": "5rem",
        "8xl": "6rem"
      },
      letterSpacing: {
        "widest-xl": "0.15em"
      }
    }
  },
  variants: {
  },
  plugins: []
};
