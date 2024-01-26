module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#F06A50",
        secondary: "#001233",
        hoverButton: "#EC4221",
        color: "#FF595A",
        textColor: "#2b2b2b",
        backColor: "#E1E1E1",
        inputColor: "#4B5563",
      },
      fontFamily: {
        heading: ["Poppins"],
        sans: ["Overpass", "sans-serif"],
        roboto: ["Roboto"],
        display: ["serif"],
      },
      boxShadow: {
        shadow: "10px 10px 19px #1c1e22, -10px -10px 19px #262a2e",
      },
      spacing: {
        23: "18px",
      },
    },
  },
  plugins: [],
};
