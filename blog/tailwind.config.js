/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-bg': '#15211F',
        'primary-text': '#DFF6FF',
        'accent': '#23F57E',
      },
      fontFamily: {
        'albert': ['"Albert Sans"', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}