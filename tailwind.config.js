/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        bonheur: ['"Bonheur Royale"', 'cursive'],
        Lexend: ['Lexend', 'sans-serif'], 
        Figtree:['Figtree','sans-serif'],// example of a local font
      },
    },
  },
  plugins: [],
}

