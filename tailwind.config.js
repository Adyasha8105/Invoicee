module.exports = {
  purge: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
      extend: {
          colors: {
              primary: "#FECCCB",
          },
      }
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
