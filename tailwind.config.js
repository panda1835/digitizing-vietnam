/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'futura': ['Futura', 'sans-serif']
      },
      colors: {
        'primary': '#141663', // This is a shade of blue
        'secondary': '#F9A41A' // This is a shade of gray
      }
    },
  },
  plugins: [],
}
