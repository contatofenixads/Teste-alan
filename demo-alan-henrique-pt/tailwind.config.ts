import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: "#f5f2ea",
          dark: "#eae5d9",
        },
        ink: {
          DEFAULT: "#1e1b17",
          muted: "#5a544a",
        },
        accent: {
          DEFAULT: "#9d4e36",
          hover: "#7d3d2a",
        },
        stone: {
          DEFAULT: "#c5bfb2",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
        serif: ["var(--font-lora)", "ui-serif", "Georgia", "serif"],
      },
    },
  },
  plugins: [],
};

export default config;
