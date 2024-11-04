/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    fontFamily: {
      sans: ["Montserrat", "sans-serif"],
    },
    colors: {
      purpleDark: "#3B1E54",
      purpleSoft: "#9B7EBD",
      purpleLight: "#D4BEE4",
      grayLight: "#EEEEEE",
      white: "#FFFFFF",
    },
    extend: {},
  },
  plugins: [],
};
