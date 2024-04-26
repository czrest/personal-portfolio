const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    '.src/lib/**/*.js,ts,jsx,tsx,mdx'
  ],
  theme: {
    extend: {
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
        '2/1': '200%',
      },
      height: {
        '6/5': '120%',
        '2/1': '200%',
      },
    },
  },
  plugins: [],
});