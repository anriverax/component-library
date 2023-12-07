import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    colors: {
      default: {
        50: "#f7f8f8",
        100: "#edeef1",
        200: "#d8dbdf",
        300: "#b6bac3",
        400: "#8e95a2",
        500: "#6b7280",
        600: "#5b616e",
        700: "#4a4e5a",
        800: "#40444c",
        900: "#383a42",
        950: "#25272c"
      },
      primary: {
        50: "#eefffd",
        100: "#c6fffc",
        200: "#8efffa",
        300: "#4dfbf8",
        400: "#19e6e8",
        500: "#00bfc4",
        600: "#009ca4",
        700: "#027c83",
        800: "#086067",
        900: "#0c5055",
        950: "#002e34"
      },
      secondary: {
        50: "#faf5f7",
        100: "#f6edf1",
        200: "#eedce3",
        300: "#e0c1cd",
        400: "#cc9aac",
        500: "#ba7a90",
        600: "#a45e72",
        700: "#8b4b5c",
        800: "#7d4553",
        900: "#623943",
        950: "#3a1d25"
      },
      success: {
        100: "#EBFCD3",
        200: "#D1FAA8",
        300: "#AEF07A",
        400: "#8BE156",
        500: "#5ACE25",
        600: "#40B11B",
        700: "#2A9412",
        800: "#18770B",
        900: "#0B6207"
      },
      info: {
        100: "#D3E7FF",
        200: "#A6CDFF",
        300: "#7AAFFF",
        400: "#5996FF",
        500: "#236CFF",
        600: "#1953DB",
        700: "#113DB7",
        800: "#0B2A93",
        900: "#061D7A"
      },
      warning: {
        100: "#FFF8CD",
        200: "#FFEF9B",
        300: "#FFE36A",
        400: "#FFD845",
        500: "#FFC507",
        600: "#DBA405",
        700: "#B78403",
        800: "#936702",
        900: "#7A5201"
      },
      danger: {
        100: "#FFE3D6",
        200: "#FFC0AD",
        300: "#FF9783",
        400: "#FF6F65",
        500: "#FF3236",
        600: "#DB2438",
        700: "#B71938",
        800: "#930F35",
        900: "#7A0933"
      },
      black: "#0C0C0C",
      white: "#FFFFFF"
    },
    extend: {
      screens: {
        xs: "412px"
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))"
      },
      transitionTimingFunction: {
        "in-expo": "cubic-bezier(0.95, 0.05, 0.795, 0.035)",
        "out-expo": "cubic-bezier(0.19, 1, 0.22, 1)",
        standard: "cubic-bezier(.17,.67,.83,.67)",
        exit: "cubic-bezier(0.25, 0, 1, 1)"
      },
      boxShadow: {
        "3xl": "0 35px 60px -15px rgba(0, 0, 0, 0.3)"
      }
    }
  },
  plugins: []
};
export default config;
