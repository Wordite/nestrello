
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: '#000000',
        default: '#090909',
        secondary: '#19191A',
        light: '#9898A1',
        primary: '#2B47D2',
        primaryHover: '#6D1CEF',
        subSecondary: '#1C1B1B',
      }
    },

    container: {
      screens: ''
    }
  },
  plugins: [],
}