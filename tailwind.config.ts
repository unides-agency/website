import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: "375px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    fontSize: {
      xs: ["1.5rem", "0.8"],
      sm: ["1.75rem", "0.8"],
      base: ["2rem", "1"],
      lg: ["2.25rem", "1"],
      xl: ["2.5rem", "1.1"],
      "2xl": ["3rem", "1.1"],
      "3xl": ["3.75rem", "1.1"],
      "4xl": ["4.5rem", "1.25"],
      "5xl": ["6rem", "1.25"],
      "6xl": ["7.5rem", "1.25"],
      "7xl": ["9rem", "1.25"],
      "8xl": ["12rem", "1.25"],
      "9xl": ["16rem", "1.25"],
    },
    extend: {
      fontFamily: {
        primary: ["primary", "sans-serif"],
        secondary: ["secondary", "sans-serif"],
      },

      colors: {
        primary: "#ff909f",
        primaryText: "#003239",
        primaryAccent: "#ead600",
        secondary: "#b688ff",
        secondaryText: "#cafd00",
        secondaryAccent: "#ff5d00",
      },
    },
  },
  plugins: [],
} satisfies Config;
