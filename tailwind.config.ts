import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

// "Nature distilled" system: cream, plum ink, terracotta, lavender and sage.
// Semantic names (background, primary…) stay because the shadcn/ui primitives
// read them; brand names (cream, plum, clay…) are for editorial layouts.
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "1.25rem",
      screens: { "2xl": "1240px" },
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
        cream: "#F6F1E7",
        paper: "#FCF9F3",
        sand: "#EDE4D3",
        line: "#DDD0BA",
        plum: {
          DEFAULT: "#2A1B2E",
          soft: "#5C4B5F",
        },
        terracotta: "#D2553A",
        clay: "#A63C24",
        lavender: {
          DEFAULT: "#B7A6E3",
          soft: "#E4DCF5",
        },
        sage: {
          DEFAULT: "#8DB39B",
          soft: "#DCE9DF",
        },
      },
      fontFamily: {
        display: ['"Fraunces"', "Georgia", "serif"],
        sans: ['"Instrument Sans"', "system-ui", "sans-serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 6px)",
        sm: "calc(var(--radius) - 10px)",
        blob: "2.25rem",
      },
      boxShadow: {
        lift: "0 1px 0 hsl(289 26% 14% / 0.06), 0 18px 40px -22px hsl(289 26% 14% / 0.35)",
        card: "0 1px 0 hsl(289 26% 14% / 0.05), 0 10px 26px -18px hsl(289 26% 14% / 0.3)",
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
        marquee: {
          to: { transform: "translateX(-50%)" },
        },
        "word-rise": {
          from: { transform: "translateY(60%)" },
          to: { transform: "none" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        marquee: "marquee 40s linear infinite",
        "word-rise": "word-rise 0.9s cubic-bezier(0.16, 1, 0.3, 1) both",
      },
    },
  },
  plugins: [tailwindcssAnimate],
} satisfies Config;
