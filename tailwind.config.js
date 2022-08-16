const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      title: ["Tangerine", ...defaultTheme.fontFamily.serif],
      body: ["Montserrat", ...defaultTheme.fontFamily.sans],
    },
    colors: {
      current: "currentColor",
      dark: "#241C18",
      primary: "#D8564D",
      secondary: "#BDB5AD",
      light: "#F9F7F1",
    },
  },
  variants: {},
  plugins: [],
};
