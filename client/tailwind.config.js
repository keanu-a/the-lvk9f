import plugin from "tailwindcss/plugin";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      "main-blue": "#6596f5",
      "main-blue-darker": "#1961F0",
      "secondary-blue": "#88d5f3",
      "main-yellow": "#f5d190",
      "main-red": "#f6b5a3",
      "main-orange": "#F6C39A",
      "main-purple": "#AEA6CC",
      "secondary-red": "#A35F4D",
      "main-gray": "#EDEDED",
      "secondary-gray": "#5C5C5C",
      "main-white": "#ffffff",
      "main-black": "#141414 ",
    },
    extend: {
      boxShadow: {
        "shift-left-main": "4px 4px 0 0 #6596f5",
        "shift-right-main": "-4px 4px 0 0 #6596f5",
        "shift-left-secondary": "4px 4px 0 0 #88d5f3",
        "shift-right-secondary": "-4px 4px 0 0 #88d5f3",
        "shift-left-yellow": "4px 4px 0 0 #f5d190",
        "shift-right-yellow": "-4px 4px 0 0 #f5d190",
        "shift-left-red": "4px 4px 0 0 #f6b5a3",
        "shift-right-red": "-4px 4px 0 0 #f6b5a3",
      },
      textShadow: {
        sm: "0 1px 2px var(--tw-shadow-color)",
        DEFAULT: "0 2px 4px var(--tw-shadow-color)",
        lg: "1px 1px 0 var(--tw-shadow-color)",
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "text-shadow": (value) => ({
            textShadow: value,
          }),
        },
        { values: theme("textShadow") }
      );
    }),
  ],
};
