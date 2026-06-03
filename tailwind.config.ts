import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#2C4A6E",
          "primary-hover": "#243C5B",
          secondary: "#4A7C6F",
          accent: "#B05E3A",
          "accent-hover": "#933F1F",
        },
        surface: {
          DEFAULT: "#F5F0E8",
          raised: "#FFFFFF",
          inverse: "#1A1A2E",
        },
        text: {
          primary: "#1A1A2E",
          secondary: "#3D3D54",
          "on-inverse": "#F5F0E8",
        },
        border: {
          subtle: "#D9D2C5",
          strong: "#8C8579",
        },
        link: {
          DEFAULT: "#8C5A00",
          visited: "#5E3D00",
        },
        state: {
          success: "#2D6A4F",
          warning: "#B86E00",
          error: "#9B2226",
        },
        focus: "#B05E3A",
      },
      fontFamily: {
        serif: ['"Libre Baskerville"', "Georgia", '"Times New Roman"', "serif"],
        sans: ['"Source Sans 3"', "system-ui", "-apple-system", '"Segoe UI"', "sans-serif"],
      },
      fontSize: {
        // Modular 1.250 scale, 16px base. [size, lineHeight]
        display: ["3.815rem", { lineHeight: "1.1", fontWeight: "700" }],
        h1: ["3.052rem", { lineHeight: "1.15", fontWeight: "700" }],
        h2: ["2.441rem", { lineHeight: "1.2", fontWeight: "700" }],
        h3: ["1.953rem", { lineHeight: "1.25", fontWeight: "600" }],
        h4: ["1.563rem", { lineHeight: "1.3", fontWeight: "600" }],
        lead: ["1.25rem", { lineHeight: "1.5", fontWeight: "400" }],
        body: ["1rem", { lineHeight: "1.6", fontWeight: "400" }],
        small: ["0.875rem", { lineHeight: "1.5", fontWeight: "400" }],
        xs: ["0.75rem", { lineHeight: "1.4", fontWeight: "600" }],
      },
      spacing: {
        "section-mobile": "4rem", // 64px
        "section-desktop": "6rem", // 96px
      },
      borderRadius: {
        sm: "4px",
        md: "8px",
        lg: "16px",
      },
      boxShadow: {
        sm: "0 1px 2px rgba(26, 26, 46, 0.06)",
        md: "0 4px 12px rgba(26, 26, 46, 0.08)",
        lg: "0 16px 32px rgba(26, 26, 46, 0.12)",
      },
      maxWidth: {
        container: "1200px",
        prose: "65ch",
      },
      transitionTimingFunction: {
        "ease-out-custom": "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      transitionDuration: {
        fast: "150ms",
        base: "250ms",
        slow: "400ms",
      },
    },
  },
  plugins: [],
};

export default config;
