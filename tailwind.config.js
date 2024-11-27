/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        neutral: {
          800: '#262626',
          900: '#171717',
          950: '#0a0a0a',
        },
      },
    },
  },
  plugins: [],
};