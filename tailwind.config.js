/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    screens: {
      'xs':'480px',
      'sm':'640px',
      'md':'800px',
      'lg':'1024px',
      'xl':'1280px',
      'xxl':'1536px'
    },
    extend: {
      colors: {
        darkBlack: "#1E1E1E",
        lightBlack: "#2D2D2D",
        blackWhite: "#5f5f5f",
        normalBlack: "#252526",
        grayishWhite: "#8E9093",
        textWhite: "#CCCCCC",
        brightWhite: "#FFFFFF",
        brightYellow: "#E8AE39",
        skyBlue: "#6099BD",
        darkPurple:'#BC3FBC',
        borderBlack: '#404040'
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
