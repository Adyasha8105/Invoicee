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
        secondary: "#1F488A",
      },
      boxShadow: {
        sm:
          "0px 1px 3px rgba(0,0,0,0.12), 0px 1px 2px rgba(0,0,0,0.24)",
        md:
          "0px 14px 28px rgba(0,0,0,0.25), 0px 10px 10px rgba(0,0,0,0.22)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
