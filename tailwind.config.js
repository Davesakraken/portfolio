/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx},",
    "'./src/**/*.{js,ts,jsx,tsx}'",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        "SF-Pro-Display-Regular": ["SF-Pro-Display-Regular", "sans-serif"],
        "SF-Pro-Display-Medium": ["SF-Pro-Display-Medium", "sans-serif"],
        "SF-Pro-Display-Bold": ["SF-Pro-Display-Bold", "sans-serif"],
      },
    },
  },
  plugins: [],
};
