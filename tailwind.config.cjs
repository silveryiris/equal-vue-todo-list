/** @type {import('tailwindcss').Config} */
/* eslint-env node */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,vue}"],
  theme: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/container-queries"),
    require("@tailwindcss/typography"),
    require("daisyui"),
  ],
  darkMode: "class",
}
