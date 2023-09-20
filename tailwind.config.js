/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // color_1: "#ebfdff",
        // color_1: "#ADD8E6",
        color_1: "#a3ddf0",
        // color_2: "#004F7F",
        color_2: "white",
        color_7: "#03254c",
        // color_3: "#f5fafd",
        color_3: "#F5FBFF",
        color_8: "#F5F5F5",
        linkBlue: "#0047ab",
        maroon: "#541e1b",
        color_4: "#6987ab",
        color_5: "#004F7F",
        color_black: "black",
        color_6: "#f0f5f5",
        text_1: "#36454f",
        text_2: "#808080",
      },
    },
    fontFamily: {
      rubik: ["Rubik", "sans-serif"],
      workSans: ["Work Sans", "sans-serif"],
      signika: ["Signika Negative", "sans-serif"],
      heading: ["Castoro Titling", "sans-serif"],
    },
  },
  plugins: [],
};
