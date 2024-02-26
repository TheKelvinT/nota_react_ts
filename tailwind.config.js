const { url } = require("inspector");
const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      listStyleType: {
        disc: "disc",
      },
      colors: {
        primary: "#F3F3EC",
        "primary-100": "#dbdbd4",
        secondary: "#30332A",
        main: "#595D3C",
        sub: "#51535C",
        light: "#F5F5F5",
      },
      fontFamily: {
        inter: ["Inter", "san-serif"],
        biro: ["BiroScriptPlus", "san-serif"],
        marcellus: ["Marcellus", "san-serif"],
        gothic: ["Gothic", "san-serif"],
      },
    },
    screens: {
      xs: "428px",
      ssm: "576px",
      ...defaultTheme.screens,
    },
  },

  plugins: [],
};
