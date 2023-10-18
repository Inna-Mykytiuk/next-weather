import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        xs: "350px",
        sm: "768px",
        md: "1060px",
        lg: "1280px",
        xl: "1540px",
      },
      colors: {
        mainGray: "#181716",
        mainWhite: "#ffffff",
        mainGreen: "#4e5431",
        secondGreen: "#9fb142",
        borderDark: "#78814d",
        borderLight: "#b3bb8c",
        borderBg: "#c4c8b1",

        gray20: "#4e5431",
        gray50: "#EFE6E6",
        gray100: "#DFCCCC",
        gray500: "#5E0000",

        primary100: "#FFE1E0",
        primary200: "#c9cbbf",
        primary300: "#FFA6A3",
        primary500: "#FF6B66",
        secondary400: "#FFCD5B",
        secondary500: "#FFC132",

        rose800: "5c0003",
      },
      fontFamily: {
        popins: ["Poppins", "sans-serif"],
        dancing: ["Dancing Script", "cursive"],
      },
    },
  },
  plugins: [],
  scrollbar: ["rounded"],
};
export default config;
