import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        blue: {
          "50": "#e8f4f8",
          "100": "#d1e9f1",
          "200": "#a3d3e3",
          "300": "#75bdd5",
          "400": "#47a7c7",
          "500": "#3498db",
          "600": "#2980b9",
          "700": "#1f6592",
          "800": "#154a6b",
          "900": "#0a2f44",
        },
        green: {
          "50": "#eafaf1",
          "100": "#d5f5e3",
          "200": "#abebc6",
          "300": "#82e0aa",
          "400": "#58d68d",
          "500": "#2ecc71",
          "600": "#27ae60",
          "700": "#1f8b4c",
          "800": "#186a39",
          "900": "#0e4725",
        },
        purple: {
          "50": "#f5eef8",
          "100": "#ebddf1",
          "200": "#d7bbe3",
          "300": "#c39ad5",
          "400": "#af78c7",
          "500": "#9b59b6",
          "600": "#8e44ad",
          "700": "#703688",
          "800": "#522863",
          "900": "#341a3f",
        },
        orange: {
          "50": "#fdf2e9",
          "100": "#fae5d3",
          "200": "#f5cba7",
          "300": "#f0b27a",
          "400": "#eb984e",
          "500": "#e67e22",
          "600": "#d35400",
          "700": "#a04000",
          "800": "#6e2c00",
          "900": "#3c1800",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

export default config
