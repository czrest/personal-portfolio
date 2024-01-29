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
        accent: {
          1: "hsl(var(--color-accent1) / <alpha-value>)",
          2: "hsl(var(--color-accent2) / <alpha-value>)",
          3: "hsl(var(--color-accent3) / <alpha-value>)",
        },
        primary: "hsl(var(--color-primary) / <alpha-value>)",
        secondary: "hsl(var(--color-secondary) / <alpha-value>)",
      },
      width: {
        '6/5': '120%',
      }
    },
  },
  plugins: [],
};