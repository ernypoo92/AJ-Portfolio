/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{js, jsx}"],
  theme: {
    fontFamily: {
      'Name': ['Exo', 'sans-serif'],
      'Body': ['Roboto Condensed', 'sans-serif'],
      'Tech': ['Kanit', 'sans-serif']
    },
    colors: {
      'yellow': '#FFB400',
      'white-dark': '#FFFFF7',
      'grey-light': '#f5f5f5',
      'black-blue': '#0D1B2A',
      'black-rich': '#071013',
      'prof': '#8A1D27',
      'comf': '#E8051F',
      'expl': '#FF7919',
    },
    screens: {
      'xs': '380px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    },
    extend: {
      colors: {
        github: '#333333',
        'github-hover': '#4d5d5d',
        linkedin: '#2867B2',
        'linkedin-hover': '#3a80d3',
        twitter: '#1DA1F2',
        'twitter-hover': '#4db5f5',
        'dark-gray': '#1A1B1C',
        'dark-gray-2': '#272727',
      },
      keyframes: {
        line: {
          to: { strokeDashoffset: 0 },
        },
        name: {
          '0%': { fill: 'transparent', width: '100%' },
          '20%': { fill: 'currentColor', width: '100%' },
          '100%': { fill: 'currentColor', width: '10%' },
        },
        'fade-in': {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        'fade-down': {
          from: { opacity: 0, transform: 'translateY(-12px)' },
          to: { opacity: 1, transform: 'translateY(0)' },
        },
        'fade-up': {
          from: { opacity: 0, transform: 'translateY(12px)' },
          to: { opacity: 1, transform: 'translateY(0)' },
        },
        'fade-left': {
          '0%': { opacity: 0, transform: 'translateX(-6px)' },
          '40%': { opacity: 0.6, transform: 'translateX(4px)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        },
        'fade-right': {
          '0%': { opacity: 0, transform: 'translateX(6px)' },
          '40%': { opacity: 0.6, transform: 'translateX(-4px)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        },
        'timeline-line': {
          '0%': { transform: 'scale(0) translate(-50%, -20px)' },
          '100%': { transform: 'scale(1) translate(-50%, -20px)' },
        },
      },
      animation: {
        line: 'line 2s ease forwards',
        name: 'name 1.2s ease forwards',
        'fade-in': 'fade-in 0.6s ease forwards',
        'fade-down': 'fade-down 0.6s ease forwards',
        'fade-up': 'fade-up 0.6s ease forwards',
        'fade-left': 'fade-left 0.6s ease forwards',
        'fade-right': 'fade-right 0.6s ease forwards',
        'timeline-line': 'timeline-line 6s ease forwards',
      },
    },
  },
  plugins: [],
}
