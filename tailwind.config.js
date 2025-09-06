/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        slate: {
          50: "#F8FAFC",
          200: "#E2E8F0",
          700: "#334155",
          900: "#0F172A",
        },
        blue: {
          400: "#60A5FA",
          500: "#3B82F6",
        },
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
