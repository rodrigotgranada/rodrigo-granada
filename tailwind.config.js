/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      'xs': "335px",
      'sm': "480px",
      'md': "768px",
      'lg': "1020px",
      'xl': "1440px",
    },
    extend: {
      colors: {
        textActive: `var(--textActive)`,
        navBgColor: `var(--navBgColor)`,
        navBorderColor: `var(--navBorderColor)`,
        navBgColorSmall: `var(--navBgColorSmall)`,
        cardBgColor: `var(--cardBgColor)`,
        bgColor: `var(--bgColor)`,
        textColor: `var(--textColor)`,
        lightBlue: "hsl(215.02, 98.39%, 51.18%)",
        darkBlue: "hsl(213.86, 58.82%, 46.67%)",
        lightGreen: "hsl(156.62, 73.33%, 58.82%)",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      spacing: {
        180: "32rem",
      },
    },
  },
  plugins: [],
};