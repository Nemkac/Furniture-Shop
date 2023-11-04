/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {},
    fontFamily:{
      inter: ["Inter", "sans-serif"],
    },
    colors:{
      primary: "#072E33",
      secondary: "0F969C",
      textWhite: "#F5F6FA",
      textLight: "6DASC0",
      textDark: "05161A",
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
}

