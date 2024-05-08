/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        "hover-nav": "scale-nav .5s ease-in-out forwards",
      },
      colors: {
        "yellow-primary": "#FFA006",
      },
      keyframes: {
        "scale-nav": {
          "0%": {
            transform: "scaleX(0)",
            innerWidth: "0",
            opacity: "0",
          },
          "100%": {
            transform: "scaleX(1)",
            innerWidth: "1/3",
            opacity: "1",
          },
        },
      },
    },
  },
  plugins: [],
};
