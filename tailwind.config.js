module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        iPhone14: { raw: "(width: 430px) and (height: 932px)" }, // Exact dimensions of iPhone 14 Pro Max
      },
    },
  },
  plugins: [],
};
