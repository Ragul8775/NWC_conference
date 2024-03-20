/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#10316B",
        primaryLight: "#0B409C",
        highlight: "#FDBE34",
        light: "#F2F7FF",
      },
      fontFamily: {
        main: ["Oswald"],
        inter: ["Inter"],
      },
    },
  },
  plugins: [],
};
