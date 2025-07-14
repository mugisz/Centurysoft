import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./constants/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#4452FE",
        secondary: {
          DEFAULT: "#02E4C0",
          dark: "#112D57",
        },
        text: {
          first: "#000000",
          light: "#FFFFFF",
          second: "#5C5C5C",
        },
        bg_color: {
          dark: "#181818",
          light: "#FFFFFF",
        },
      },
    },
  },
  plugins: [],
};

export default config;
