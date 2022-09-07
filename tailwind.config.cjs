/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.html", "./src/**/*.vue", "./src/**/*.tsx"],
  darkMode: "class",
  theme: {
    backdropFilter: {
      'none': 'none',
      'blur': 'blur(20px)',
    },
    extend: {
      colors: {
        primaryBlack: "#111213ff",
        secondaryBlack: "#212224ff",
        primaryWhite: "#F9F9F9",
        secondaryWhite: "#FCF8E8",
        silver: "#a1a1a1ff",
        blue: "#2f71e8ff",
        cyan: "#29b9f0ff"
      },

    },
    plugins: [
      require('tailwindcss-filters'),
    ],
  },
  plugins: [],
}
