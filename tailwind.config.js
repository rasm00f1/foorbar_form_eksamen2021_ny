module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      skew: {
        60: "60deg",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
