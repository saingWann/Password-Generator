/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      lineHeight: {
        'extra-loose': '3',
        '12': '3rem'},
      fontFamily: {
        'primary':['Sora', 'sans-serif']
      }
    },

  },
  plugins: [],
}