/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "",
  // darkMode: "class",

  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],

  daisyui: {
    styled: true,
    themes: true,
    base: true,
    utils: true,
    logs: true,
    rtl: true,
    prefix: "",
    darkTheme: "light",
  },
};
