/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cinzel: ['Cinzel Decorative', 'serif'],
        forum: ['Forum', 'sans-serif'],
        abhaya: ['Abhaya Libre', 'serif'],
        genos: ['Genos', 'sans-serif'],
        gaegu: ['Gaegu', 'sans-serif'],
        galada: ['Galada', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

