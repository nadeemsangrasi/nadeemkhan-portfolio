import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    // colors: {
    //   "primary-black": "#0C0C0D",
    //   "secondary-black": "#211F23",
    //   "primary-gray": "#272727",
    //   "secondary-gray": "#6f6f6f",
    //   "primary-white": "#FFFFFF",
    //   "secondary-white": "#c8c8c8",
    //   "seagreen": "#5fb9bo",
    //   "purple": "#b292ff",
    //   "card-1": "#C3C99E",
    //   "card-2": "#7D9CA5",
    //   "card-3": "#C2C2C2",
    //   "card-4": "#C0E5D7",
    //   "heading-1": "#C69AFF",
    //   "heading-2": "#9F53FF",
    //   "heading-3": "#6104D6",
    //   "expCard": "#131313"
    // },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
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
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        moveHorizontal: {
          "0%": {
            transform: "translateX(-50%) translateY(-10%)",
          },
          "50%": {
            transform: "translateX(50%) translateY(10%)",
          },
          "100%": {
            transform: "translateX(-50%) translateY(-10%)",
          },
        },
        moveInCircle: {
          "0%": {
            transform: "rotate(0deg)",
          },
          "50%": {
            transform: "rotate(180deg)",
          },
          "100%": {
            transform: "rotate(360deg)",
          },
        },
        moveVertical: {
          "0%": {
            transform: "translateY(-50%)",
          },
          "50%": {
            transform: "translateY(50%)",
          },
          "100%": {
            transform: "translateY(-50%)",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        first: "moveVertical 30s ease infinite",
        second: "moveInCircle 20s reverse infinite",
        third: "moveInCircle 40s linear infinite",
        fourth: "moveHorizontal 40s ease infinite",
        fifth: "moveInCircle 20s ease infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config