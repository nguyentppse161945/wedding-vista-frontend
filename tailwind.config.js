module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#fbb6ce",

      },
      backgroundImage: {
        Hero: "url('assets/wp2.png')",
      },
    },
  },
  plugins: [],
};
