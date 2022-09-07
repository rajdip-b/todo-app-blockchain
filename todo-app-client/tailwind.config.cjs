/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.html", "./src/**/*.vue", "./src/**/*.tsx"],
  theme: {
    backdropFilter: {
      'none': 'none',
      'blur': 'blur(20px)',
    },
    extend: {
      colors: {
        primaryBlack: "#111213ff",
        secondaryBlack: "#212224ff",
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
