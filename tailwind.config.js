/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    screens:{
      sm:'480px',
      md:'768px',
      lg:'976px',
      xl:'1440px'
    },
    extend: {
      colors:{
        darkBlack:"#1E1E1E",
        lightBlack:"#2D2D2D",
        normalBlack:"#252526",
        grayishWhite:"#8E9093",
        textWhite:"#CCCCCC",
        brightWhite:"#FFFFFF",
        brightYellow:"#E8AE39",
        skyBlue:"#6099BD"
      },
      fontFamily:{
        "inter":['"Inter"','sans-serif'],
        "firaCode":['"Fira Code"','monospace']
      },
      width:{
        '161':'161px'
      },
      height:{
        '47':'47px'
      }
    },
  },
  plugins: [],
}
