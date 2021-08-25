module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      keyframes: {
        "fade-in-down": {
          "0%": {
            opacity: "0",
            transform: "translateY(-10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },

        "fade-out-down": {
          from: {
            opacity: "1",
            transform: "translateY(0px)",
          },
          to: {
            opacity: "0",
            transform: "translateY(10px)",
          },
        },
        boxfade: {
          from: {
            transform: "translateY(-40rem)",
            transform: "translateX(-40rem)",
          },
          to: {
            transform: "translateY(40rem)",
            transform: "translateX(20rem)",
          },
        },
        boxerfader: {
          from: {
            // transform: "translateY(40rem)",
            transform: "translateX(60rem)",
          },
          to: {
            transform: "translateY(-5rem)",
            transform: "translateX(-5rem)",
          },
        },
        pulse: {
          " 25%, 100%": { opacity: "1" },
          "50%": {
            opacity: "0.5",
          },
        },
        colorchange: {
          "25%": {
            color: "red",
          },
          "50%": {
            color: "white",
          },
          "100%": {
            color: "blue",
          },
        },
      },

      animation: {
        "fade-in-down": "fade-in-down 3s ease-out",
        "fade-out-down": "fade-out-down 3s ease-out",
        wiggle: "wiggle 1s ease-in-out infinite",
        pulse: "pulse 2s ease-in-out infinite ",
        colorchange: "colorchange 2s ease-in-out infinate",
        boxfade: "boxfade 1s  ",
        boxerfader: "boxerfader 1s",
      },

      backgroundImage: (theme) => ({
        Map: "url('./images/Screen Shot 2021-08-03 at 12.22.45 PM.png')",
        Menu: "url('./images/mainChefMenu.jpg')",
        header: "url('./images/kura-tregenza-UlPLmbSOu_w-unsplash.jpeg')",
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
      height: {
        xl: "40rem",
        xxl: "55rem",
      },
      width: {
        xxl: "95rem",
        xl: "80rem",
      },
      colors: {
        footerGray: "#262626",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
