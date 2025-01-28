/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        helvetica: ["HelveticaNeueLight", "sans-serif"],
        robotoCondensed: ["'Roboto Condensed'", "sans-serif"],
      },
    },
  },
  plugins: [],
};
