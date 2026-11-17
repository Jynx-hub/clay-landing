import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        clay: {
          paper: "#F6F4EF",
          bg: "#E8EEFB",
          sky: "#5FC3E7",
          coral: "#F26D6D",
          "coral-ink": "#CC3D3D",
          yellow: "#FFD84D",
          ut: "#BF5700",
          ink: "#17150F",
          line: "#E4E0D6",
        },
      },
      fontFamily: {
        sans: ["var(--font-display)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      boxShadow: {
        panel:
          "0 1px 0 rgba(23,21,15,0.04), 0 12px 32px -16px rgba(23,21,15,0.22)",
      },
    },
  },
  plugins: [],
};

export default config;
