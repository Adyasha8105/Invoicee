module.exports = {
  purge: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
      extend: {
          colors: {
              primary: "#0B7EE1",
          },
      }
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
