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
      }
    },
  },
  plugins: [],
}

