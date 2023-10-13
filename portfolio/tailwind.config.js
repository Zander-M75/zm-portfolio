export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        333: "#333333",
        ECF0F1: "#ECF0F1",
      },
      textShadow: {
        default: "0 2px 5px rgba(0, 0, 0, 0.2)",
      },
    },
  },
  variants: {
    extend: {
      textShadow: ["responsive"],
    },
  },
  plugins: [require("tailwindcss-textshadow")],
};
