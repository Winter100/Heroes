import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      gridTemplateRows: {
        "17": "repeat(17, minmax(0,1fr))",
      },
      gridTemplateColumns: {
        "auto-fill": "repeat(auto-fill, minmax(200px, 1fr))",
        "auto-150-fill": "repeat(auto-fill, minmax(150px, 1fr))",
      },
      alignContent: {
        "space-around": "space-around",
      },
      animation: {
        boundUpDown: "boundUpDown 0.5s ease-in-out",
      },
      keyframes: {
        boundUpDown: {
          "0%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-3px)" },
          "100%": { transform: "translateY(0)" },
        },
      },
      colors: {
        background: "rgba(var(--background))",
        backgroundOne: "rgba(var(--backgroundOne))",
        backgroundTwo: "rgba(var(--backgroundTwo))",
        btnHoverBackground: "rgba(var(--btnHoverBackground))",
        fontColor: "rgba(var(--fontColor))",
        gnbBackground: "rgba(var(--gnbBackground))",
        borderColor: "rgba(var(--borderColor))",
        borderColorOne: "rgba(var(--borderColorOne))",
        toggleBackground: "rgba(var(--toggleBackground))",
        deleteFontColor: "rgba(var(--deleteFontColor))",
        selectedOrHoverColor: "rgba(var(--selectedOrHoverColor))",
      },
      translate: {
        "-1/2": "-50%",
      },
    },
  },
  plugins: [],
};
export default config;
