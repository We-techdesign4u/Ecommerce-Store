/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html", "./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        Primary: "#3b5d4f",
        "Primary-light": "#7aa796",
        "primary-dark": "#011f16",
        "primary-lightbg": "#f0f2f1",
        secondary: "#e0c40f",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        Quicksand: ["Quicksand", "sans-serif"],
        Phudu: ["Phudu", "sans-serif"],
      },
    },
  },
  plugins: [],
};
