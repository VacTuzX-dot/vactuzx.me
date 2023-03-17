/** @type {import('tailwindcss').Config} */
module.exports = {
 
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'back': {
          DEFAULT: '#101010',
        },
        'indigo': {
          DEFAULT: '#ff0000',
        },
        'card': {
          DEFAULT: '#151515',
        },
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true }),
  ],
  
}
