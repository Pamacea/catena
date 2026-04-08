import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        parchment: {
          50: "#faf8f5",
          100: "#f5f0e8",
          200: "#ebe3d4",
          300: "#e0d6c0",
          400: "#d4c4a8",
          500: "#c9b390",
          600: "#bfa67b",
          700: "#a89060",
          800: "#8c7648",
          900: "#705c38",
          950: "#433521",
        },
        ink: {
          50: "#f8f8f8",
          100: "#f0f0f0",
          200: "#e4e4e4",
          300: "#d4d4d4",
          400: "#8a7e6e",
          500: "#6b5f4f",
          600: "#574b3b",
          700: "#433827",
          800: "#362c1e",
          900: "#2a2118",
          950: "#1a1410",
        },
        liturgical: {
          purple: "#5b4b8a",
          red: "#9b2c2c",
          green: "#2f5233",
          blue: "#4a6fa1",
          white: "#faf8f5",
          rose: "#b76e6e",
          50: "#faf8f5",
          100: "#f0e6dd",
          200: "#e8d5c4",
          300: "#d4c4b8",
          400: "#c0b3a8",
          500: "#a89060",
          600: "#8c7648",
          700: "#705c38",
          800: "#57432a",
          900: "#433521",
        },
        gold: {
          400: "#fbbf24",
          500: "#f59e0b",
          600: "#d97706",
        },
        // Pierre d'église - Fondation
        stone: {
          50: "#faf9f7",
          100: "#f5f3f0",
          200: "#e8e5df",
          300: "#d9d5cd",
          400: "#c4bfb5",
          500: "#a8a298",
          600: "#8a847a",
          700: "#6b6560",
          800: "#4a4540",
          900: "#2d2926",
          950: "#1a1816",
        },
        // Or sacré - Lumière divine
        divine: {
          50: "#faf9f2",
          100: "#f9f4e8",
          200: "#f5e6c3",
          300: "#ecd695",
          400: "#e4c45d",
          500: "#d4a538",
          600: "#b88a2a",
          700: "#946e21",
          800: "#73561b",
          900: "#554214",
          950: "#382f0e",
        },
        // Couleurs liturgiques affinées
        liturgicalRefined: {
          purple: "#4a3f6b",
          red: "#8b1a1a",
          green: "#2a4a2e",
          white: "#f5f3f0",
          rose: "#a86b6b",
          blue: "#3d5a7c",
          gold: "#d4a538",
        },
      },
      borderRadius: {
        xs: "0.125rem", // 2px - très léger
        "gothic-sm": "0.0625rem", // 1px - très fin
        "gothic": "0.125rem", // 2px - gothique
      },
    },
  },
};

export default config;
