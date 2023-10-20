import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "2rem",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        popins: ["Poppins", "sans-serif"],
        dancing: ["Dancing Script", "cursive"],
        josefin: ["Josefin Sans", "sans-serif"],
      },
      content: {
        homeBg: "url('./assets/forest/forest7.jpg')",
        foresttext: "url('./assets/forest/foresttext.png')",
        abstractwaves: "url('./src/assets/AbstractWaves.png')",
        circles: "url('./src/assets/Circles.png')",
      },
      screens: {
        xs: "350px",
        sm: "768px",
        md: "1060px",
        lg: "1280px",
        xl: "1540px",
      },
    },
  },
  plugins: [],
};
export default config;
