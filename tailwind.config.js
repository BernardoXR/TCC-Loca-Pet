/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    colors: {
      'white': '#fff',
      'black': '#000',
      'darkblue': '#003049',
      'orange': '#F26419'
    },

    fontFamily: {
      'jsans': 'Josefin-Sans',
      'Lato': 'Lato'
    },
    extend: {},
  },
  plugins: [],
}