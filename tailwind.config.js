/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      height: {
        '7/100': '7%',
      },
      fontFamily:{
        codecl: ['codecl', 'sans'],
      },
      width: {
        '201/2': '100.5%',
      }
    },
  },
  plugins: [],
};