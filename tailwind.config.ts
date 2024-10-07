import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      alignContent: {
        "space-around": "space-around",
      },
      animation: {
        fadeIn: "fadeIn 0.5s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(1rem)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
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
