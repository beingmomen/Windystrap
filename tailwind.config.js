/** @type {import('tailwindcss').Config} */
module.exports = {
  // darkMode: "",
  darkMode: "class",

  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        sx: "0px",
      },
      flexBasis: {
        "full-sidebar": "345px",
        "small-sidebar": "0px",
      },
      boxShadow: {
        layout: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
      },
    },
  },
  plugins: [require("daisyui")],

  daisyui: {
    styled: true,
    themes: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "light",
  },
};
