import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx,js,jsx}",
  ],
  prefix: "",
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
        // Updated colors to match FAANG logo
        primary: {
          DEFAULT: "#4285F4", // Google Blue
          50: "#E8F0FE",
          100: "#D2E3FC",
          200: "#AECBFA",
          300: "#8AB4F8",
          400: "#669DF6",
          500: "#4285F4",
          600: "#1A73E8",
          700: "#1557B0",
          800: "#0F3C78",
          900: "#0A2540",
        },
        accent: {
          DEFAULT: "#34A853", // Google Green
          50: "#E6F4EA",
          100: "#CEEAD6",
          200: "#A8DAB5",
          300: "#81C995",
          400: "#5BB974",
          500: "#34A853",
          600: "#1E8E3E",
          700: "#137333",
          800: "#0D5025",
          900: "#063D18",
        },
        secondary: {
          DEFAULT: "#FBBC04", // Google Yellow
          50: "#FEF7E0",
          100: "#FEEFC3",
          200: "#FEE293",
          300: "#FDD663",
          400: "#FCC934",
          500: "#FBBC04",
          600: "#F9AB00",
          700: "#F29900",
          800: "#EA8600",
          900: "#E37400",
        },
        destructive: {
          DEFAULT: "#EA4335", // Google Red
          50: "#FCE8E6",
          100: "#F9D0CE",
          200: "#F2A2A0",
          300: "#EC7471",
          400: "#E55A56",
          500: "#EA4335",
          600: "#D93025",
          700: "#C5221F",
          800: "#B31412",
          900: "#A50E0E",
        },
        neutral: {
          DEFAULT: "#E0E0E0",
          50: "#FAFAFA",
          100: "#F5F5F5",
          200: "#EEEEEE",
          300: "#E0E0E0",
          400: "#BDBDBD",
          500: "#9E9E9E",
          600: "#757575",
          700: "#616161",
          800: "#424242",
          900: "#212121",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
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
        "fade-in": {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "slide-in": {
          from: { opacity: "0", transform: "translateX(-20px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 5px rgba(66, 133, 244, 0.5)" },
          "50%": { boxShadow: "0 0 20px rgba(66, 133, 244, 0.8)" },
        },
        "bounce-in": {
          "0%": { transform: "scale(0.3)", opacity: "0" },
          "50%": { transform: "scale(1.05)" },
          "70%": { transform: "scale(0.9)" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        "slide-up": {
          from: { opacity: "0", transform: "translateY(30px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "scale-in": {
          from: { opacity: "0", transform: "scale(0.9)" },
          to: { opacity: "1", transform: "scale(1)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        typing: {
          "0%": { width: "0" },
          "100%": { width: "100%" },
        },
        blink: {
          "0%, 50%": { borderColor: "transparent" },
          "51%, 100%": { borderColor: "currentColor" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.6s ease-out",
        "slide-in": "slide-in 0.6s ease-out",
        float: "float 3s ease-in-out infinite",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        "bounce-in": "bounce-in 0.6s ease-out",
        "slide-up": "slide-up 0.6s ease-out",
        "scale-in": "scale-in 0.4s ease-out",
        shimmer: "shimmer 2s linear infinite",
        typing: "typing 3.5s steps(40, end)",
        blink: "blink 1s infinite",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
}

export default config
