import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        "8xl": "92rem",
        "9xl": "110rem",
        "screen-2xl": "1680px",
        "screen-3xl": "1920px",
        "full-page": "100%",
      },
      fontSize: {
        "2xs": ["0.75rem", { lineHeight: "1.1rem" }],
        xs: ["0.875rem", { lineHeight: "1.35rem" }],
        sm: ["1rem", { lineHeight: "1.6rem" }],
        base: ["1.125rem", { lineHeight: "1.8rem" }],
        lg: ["1.25rem", { lineHeight: "1.9rem" }],
        xl: ["1.375rem", { lineHeight: "2rem" }],
        "2xl": ["1.625rem", { lineHeight: "2.25rem" }],
        "3xl": ["2rem", { lineHeight: "2.6rem" }],
        "4xl": ["2.5rem", { lineHeight: "3rem" }],
        "5xl": ["3.25rem", { lineHeight: "3.75rem" }],
        "6xl": ["4rem", { lineHeight: "4.5rem" }],
        "7xl": ["5rem", { lineHeight: "5.5rem" }],
        "8xl": ["6.25rem", { lineHeight: "6.75rem" }],
        "9xl": ["7.5rem", { lineHeight: "8rem" }],
      },
      colors: {
        charcoal: {
          DEFAULT: "#0D0D0C",
          50: "#F8F8F7",
          100: "#EFEFED",
          200: "#DDDBD7",
          300: "#BDB8AF",
          400: "#948E82",
          500: "#706A5E",
          600: "#544F45",
          700: "#3B3730",
          800: "#24221D",
          900: "#0D0D0C",
          950: "#050504",
        },
        cognac: {
          DEFAULT: "#8A4F2D",
          50: "#FAF3EF",
          100: "#F3E4DC",
          200: "#E7C7B6",
          300: "#D7A38B",
          400: "#C47C5E",
          500: "#8A4F2D",
          600: "#7B4425",
          700: "#63351C",
          800: "#4F2B17",
          900: "#3D2213",
        },
        espresso: {
          DEFAULT: "#1A1411",
          light: "#2B211C",
          dark: "#0F0B09",
        },
        sand: {
          DEFAULT: "#E2DBD2",
          light: "#F5F2ED",
          dark: "#C9BEB0",
        },
        gold: {
          DEFAULT: "#B4955A",
          light: "#C9AE7A",
          dark: "#987B42",
        },
      },
      fontFamily: {
        serif: ["'Playfair Display'", "Georgia", "Cambria", "'Times New Roman'", "serif"],
        sans: ["'Inter'", "system-ui", "-apple-system", "BlinkMacSystemFont", "'Segoe UI'", "Roboto", "sans-serif"],
      },
      letterSpacing: {
        luxury: "0.3em",
        widest: "0.22em",
        wider: "0.12em",
        tightest: "-0.04em",
      },
    },
  },
  plugins: [],
};
export default config;
