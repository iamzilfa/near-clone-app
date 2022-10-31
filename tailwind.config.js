/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        banner:
          "radial-gradient(50% 50% at 50% 50%,#8e9af9 0,rgba(127,208,231,0) 100%)",
      },
      colors: {
        Zolpan: "#3F4246",
      },
      fontFamily: {
        Graphic: ["Graphik-regular","sans-serif"],
      },
    },
  },
  plugins: [],
};
