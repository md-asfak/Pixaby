/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        font1: "Playfair Display",
      },
      screens: {
        xs: "450px",
      },
    },
  },
  plugins: [],
};
