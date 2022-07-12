/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js, jsx}"],
  theme: {
    fontFamily: {
      'Name': ['Exo', 'sans-serif'],
      'Body': ['Roboto Condensed', 'sans-serif'],
      'Tech': ['Kanit', 'sans-serif']
    },
    colors: {
      'yellow': '#FFCD17',
      'white-dark': '#F5F5F5',
      'grey-light': '#9B9B9B',
      'black-blue': '#0D1B2A',
      'black-rich': '#071013',
    },
    extend: {},
  },
  plugins: [],
}
