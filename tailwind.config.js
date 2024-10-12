/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // Enable dark mode with the 'class' strategy
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        p1 : "#000000",
        p2 : "#262626"
      },
    },
  },
  plugins: [],
  
}