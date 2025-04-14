/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        purple :{
          300 : "#e0e7fe",
          500 : "#a855f7",
          600 : "#6b21a8",
          700 : "#4c1d95",
        }
      }
    },
  },
  plugins: [],
}

