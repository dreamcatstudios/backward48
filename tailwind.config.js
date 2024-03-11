/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      animation: {
        "infinite-scroll": "infinite-scroll 25s linear infinite",
      },
      colors: {
        primaryColor: "#8B163D",
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
