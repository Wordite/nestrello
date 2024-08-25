
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: '#111111',
        default: '#1f1f1f',
        secondary: 'rgb(36 35 35)',
        light: '#9898A1'
      }
    },
  },
  plugins: [],
}