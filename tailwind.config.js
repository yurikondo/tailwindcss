// npx tailwindcss init で追加
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        body: "#050505",
      },
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
      },
    },
  },
  plugins: [],
};
