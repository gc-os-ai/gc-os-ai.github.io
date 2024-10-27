/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './_includes/**/*.{html,md}',
    './_layouts/**/*.{html,md}',
    './_posts/**/*.{html,md}',
    './*.{html,md}'
  ],
  theme: {
    extend: {
      colors: {
        'gcos-green': '#4ca893'
      },
      animation: {
        'subtleColorChange': 'subtleColorChange 20s infinite'
      }
    },
  },
  plugins: [],
}