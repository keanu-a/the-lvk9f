/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      "main-blue": "#6596f5",
      "secondary-blue": "#88d5f3",
      "main-yellow": "#f5d190",
      "main-red": "#f6b5a3",
      "main-gray": "#EDEDED",
      "main-white": "#ffffff",
    },
    extend: {
      backgroundImage: {
        hero: "url('/src/assets/hero.jpg')",
      },
    },
  },
  plugins: [],
};
