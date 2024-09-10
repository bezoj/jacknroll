/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ['Roboto']
      },
      colors: {
        'primary': '#0a0a0a',
        'secondary': '#fafaf9'
      },
      boxShadow: {
        'bottom': '0px 2px 5px 0px rgba(0,0,0,0.75)',
        'custom1': '0px 5px 15px rgba(0, 0, 0, 0.35)'
      }
    },
  },
  plugins: [],
}

