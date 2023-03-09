/** @type {import('tailwindcss').Config} */
module.exports = {
 content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'small': ' 0px 2.98256px 7.4564px rgba(0, 0, 0, 0.1);',
      }
    },
  },
  plugins: [],
}
