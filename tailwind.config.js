/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        PortfolioDark: {
          "primary": "#1E1C2B",

          "secondary": "#252836",

          "accent": "#DDAC58",

          "info": "#0CA6E9",

          "base-50": "#B2B2AC",

          "success": "#2BD4BD",

          "warning": "#F4C152",

          "error": "#FB6F84",
        },
      },
    ],
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
