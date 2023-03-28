/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#f2daab",

          "secondary": "#9dbce0",

          "accent": "#87f97c",

          "neutral": "#15171E",

          "base-100": "#EDEDEE",

          "info": "#A0B8E9",

          "success": "#78DDD5",

          "warning": "#F6AC23",

          "error": "#F1376F",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}