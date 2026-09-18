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
        "2xs": ["0.6875rem", { lineHeight: "0.95rem" }], // 11px
        xs: ["0.75rem", { lineHeight: "1.15rem" }],      // 12px
        sm: ["0.84375rem", { lineHeight: "1.35rem" }],   // 13.5px
        base: ["0.9375rem", { lineHeight: "1.6rem" }],   // 15px - optimal editorial reading size
        lg: ["1.0625rem", { lineHeight: "1.65rem" }],    // 17px
        xl: ["1.1875rem", { lineHeight: "1.75rem" }],    // 19px
        "2xl": ["1.375rem", { lineHeight: "1.9rem" }],   // 22px
        "3xl": ["1.625rem", { lineHeight: "2.15rem" }],  // 26px
        "4xl": ["2rem", { lineHeight: "2.5rem" }],       // 32px
        "5xl": ["2.5rem", { lineHeight: "3rem" }],       // 40px
        "6xl": ["3.125rem", { lineHeight: "3.6rem" }],   // 50px
        "7xl": ["3.875rem", { lineHeight: "4.3rem" }],   // 62px
        "8xl": ["4.75rem", { lineHeight: "5.25rem" }],   // 76px
        "9xl": ["5.75rem", { lineHeight: "6.25rem" }],   // 92px
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
