/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'], // add new fonts
        Lexend: ['Lexend-Regular.ttf', 'sans-serif'], 
        Figtree:['Figtree-Regular.ttf','sans-serif'],// example of a local font
      },
    },
  },
  plugins: [],
}

