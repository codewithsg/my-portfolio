/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    screens: {
      brp: '290px',
      sm: '485px',
      sml:'580px',
      md: '768px',
      lg:'860px',
      xl: '976px',
      xxl: '1440px',
    },
    extend: {
      colors: {
        darkBlack: "#1E1E1E",
        lightBlack: "#2D2D2D",
        normalBlack: "#252526",
        grayishWhite: "#8E9093",
        textWhite: "#CCCCCC",
        brightWhite: "#FFFFFF",
        brightYellow: "#E8AE39",
        skyBlue: "#6099BD",
        darkPurple:'#BC3FBC'
      },
      fontFamily: {
        "inter": ['"Inter"', 'sans-serif'],
        "firaCode": ['"Fira Code"', 'monospace']
      },
      width: {
        '161': '161px'
      },
      height: {
        '47': '47px'
      }
    },
  },
  plugins: [],
}
