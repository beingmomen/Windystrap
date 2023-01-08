module.exports = {
  plugins: [
    require("postcss-import"),
    {
      "tailwindcss/nesting": {},
      tailwindcss: {},
      autoprefixer: {},
    },
  ],
};
