/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        img9: "url('./assets/img9.png')",
      },
      colors: {
        white: "#ffffff",
        purple: "#9747FF",
        purple2: "#D5C9FF",
        gris2: "#CCCCCC",
        gris3: "#979797",
        gris4: "#666666",
        gris5: "#5B5B5B",
        black: "#000000",
        black2: "#262626",
        black3: "#333232",
        blue: "#663AF8",
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
