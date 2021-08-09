module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'header': "url('./images/dumplings.jpg')",
        'Menu': "url('./images/mainChefMenu.jpg')",
       
       }),
      fontFamily: {
        sans: [
          '"Inter"',
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          '"Helvetica Neue"',
          "Arial",
          '"Noto Sans"',
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
        cursiveText: ["Style Script"],
      },
      height:{
        xl: '40rem',
        xxl:'50rem'
      },
      width:{
        xl: '80rem'
      },
      colors: {
        footerGray: '#262626',

      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
