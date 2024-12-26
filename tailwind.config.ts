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
      "2xl": "1536px",
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
