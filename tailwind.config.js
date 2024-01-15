/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      "syne":['Syne, sans-serif'],
      "rubik":['Rubik, sans-serif'],
      "Inter":['Inter, sans-serif']
    },

    extend: {
      colors: {
        "primary":"#FF9143",
        "secondry":{
          100:'#1A1A1A',
          200:'#262A2C',
          300:'#696969',
          400:'#FFFFFF',
        }
      }
    },
  },
  plugins: [],
}
