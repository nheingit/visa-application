module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "visa-blue": "#1A1F71",
        "visa-gold": "#F7B600",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
