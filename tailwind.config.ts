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
    },
    screens: {
      sx: "320px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      xxl: "1536px",
    },
    // colors: {
    //   primary: "#f85959",
    //   gray: "#4d4d4d",
    // },
    // backgroundColor: {
    //   green: "linear-gradient(135deg, #2ebdc4 0%, #68e5b2 100%);",
    // },
    fontFamily: {
      popins: ["Poppins", "sans-serif"],
    },
  },
  plugins: [],
};
export default config;
