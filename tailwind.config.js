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

          4: "hsl(var(--color-accent4) / <alpha-value>)",
          5: "hsl(var(--color-accent5) / <alpha-value>)",
          6: "hsl(var(--color-accent6) / <alpha-value>)",
        },
        primary: "hsl(var(--color-primary) / <alpha-value>)",
        secondary: "hsl(var(--color-secondary) / <alpha-value>)",
        tertiary: "hsl(var(--color-tertiary) / <alpha-value>)",
      },
      width: {
        '6/5': '120%',
      },
      height: {
        '6/5': '120%',
      },
    },
  },
  plugins: [],
};