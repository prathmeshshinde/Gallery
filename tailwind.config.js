/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        upright: ["Cormorant Upright", "sans-serif"],
      },
      backgroundImage: {
        search: "url('/public/search.svg')",
      },
    },
  },
  plugins: [],
};
