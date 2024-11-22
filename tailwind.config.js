/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'glow':  'rgba(255, 120, 55, 0.45) 0px 3px 15px'
      }
    },
  },
  plugins: [],
}