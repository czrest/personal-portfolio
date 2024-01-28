/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      height: {
        '7/100': '7%',
      },
      fontFamily: {
        codecl: ['codecl', 'sans'],
        codecr: ['codecr', 'sans'],
        codecb: ['codecb', 'sans'],
        codech: ['codech', 'sans'],
      },
      fontSize: {
        'body-lg': '1rem',
        'body': '.875rem',
      },
      colors: {
        'custom-brown': '#5b4b45',
        'custom-light': '#fffaef',
      },
      width: {
        '6/5': '120%',
      }
    },
  },
  plugins: [],
};