/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Persian font configuration for RTL support - Using local IRANSansX fonts
      fontFamily: {
        // Main Persian font family
        'sans': ['IRANSansX', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        // Persian font with alternative dot styles
        'persian': ['IRANSansX', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        'persian-dot4': ['IRANSansXDot4', 'IRANSansX', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        // Specific font families for different use cases
        'iransans': ['IRANSansX', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        'iransans-dot4': ['IRANSansXDot4', 'IRANSansX', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
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
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [],
}