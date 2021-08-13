module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      keyframes: {
        'fade-in-down':{
          '0%': {
            opacity: '0',
            transform: 'translateY(-10px)'
        },
        '100%': {
          opacity: '1',
          transform: 'translateY(0)'
      }
        },
        'fade-out-down': {
          'from': {
              opacity: '1',
              transform: 'translateY(0px)'
          },
          'to': {
              opacity: '0',
              transform: 'translateY(10px)'
          },
      },
        
    },
    animation: {
      'fade-in-down': 'fade-in-down 3s ease-out',
      'fade-out-down': 'fade-out-down 3s ease-out',
        wiggle: 'wiggle 1s ease-in-out infinite',
    },
      
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
