/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    colors: {
      white: "#ffffff",
      black: "#000000",
      red: "#EC1D25",
      green: "#00A54F",
      grey: "#F9F9F9 ",
    },
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      width: {
        515: "515px",
      },
      height: {
        496: "496px",
      },
    },
  },
  plugins: [],
};
