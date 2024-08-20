/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        customDark:'rgb(39,50,54)',
        customLight:'rgb(39,50,35)',
    },
  },

  },
  plugins: [],
}