import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      "primary-black": "#0C0C0D",
      "secondary-black": "#211F23",
      "primary-gray": "#272727",
      "secondary-gray": "#6f6f6f",
      "primary-white": "#FFFFFF",
      "secondary-white": "#c8c8c8",
      "seagreen": "#5fb9bo",
      "purple": "#b292ff",
      "card-1": "#C3C99E",
      "card-2": "#7D9CA5",
      "card-3": "#C2C2C2",
      "card-4": "#C0E5D7",
      "heading-1": "#C69AFF",
      "heading-2": "#9F53FF",
      "heading-3": "#6104D6",
      "expCard": "#131313"
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
