// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        olivegreen: {
          500: "#859974",
          600: "#768966", // добавьте темный вариант для hover
        },
        palebrown: {
          500: "#494542",
        },
        lightcream: "#EEE5DC",
        transparent: "transparent",
        current: "currentColor",
      },
      screens: {
        mobile: "400px",
      },
    },
  },
  plugins: [],
};
