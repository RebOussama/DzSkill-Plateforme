/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#ffffff",
        purple: "#9747FF",
        purple2: "#D5C9FF",
        gris1: "#666666",
        gris2: "#CCCCCC",
        gris3: "#979797",
        black: "#000000",
        black2: "#262626",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      container: {
        center: true, // Centers the container by default
        padding: {
          DEFAULT: "1rem", // Default padding
          sm: "2rem", // Padding for small screens
          lg: "4rem", // Padding for large screens
          xl: "5rem", // Padding for extra-large screens
          "2xl": "6rem", // Padding for 2xl screens
        },
      },
    },
  },
  plugins: [],
};
