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
      keyframes: {
        "cell-in": {
          "0%": { opacity: "0", transform: "translateY(4px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-120% 0" },
          "100%": { backgroundPosition: "220% 0" },
        },
      },
      animation: {
        "cell-in": "cell-in 0.35s ease-out both",
        shimmer: "shimmer 1.4s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
