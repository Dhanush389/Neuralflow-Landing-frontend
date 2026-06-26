/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          bg:      "#080B11",
          surface: "#0E1420",
          card:    "#111827",
          border:  "#1E2D40",
          accent:  "#00D4FF",
          purple:  "#7C3AED",
          green:   "#10B981",
          text:    "#E2E8F0",
          muted:   "#64748B",
        }
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        body:    ["'Inter'", "sans-serif"],
      },
      keyframes: {
        fadeUp:    { "0%": { opacity: 0, transform: "translateY(24px)" }, "100%": { opacity: 1, transform: "translateY(0)" } },
        fadeIn:    { "0%": { opacity: 0 }, "100%": { opacity: 1 } },
        shimmer:   { "0%": { backgroundPosition: "-200% 0" }, "100%": { backgroundPosition: "200% 0" } },
        pulse2:    { "0%,100%": { opacity: 0.6 }, "50%": { opacity: 1 } },
        gridMove:  { "0%": { transform: "translateY(0)" }, "100%": { transform: "translateY(60px)" } },
        orb:       { "0%,100%": { transform: "scale(1) translate(0,0)" }, "50%": { transform: "scale(1.15) translate(20px,-20px)" } },
      },
      animation: {
        fadeUp:   "fadeUp 0.5s ease-out forwards",
        fadeIn:   "fadeIn 0.4s ease-out forwards",
        shimmer:  "shimmer 2.5s linear infinite",
        pulse2:   "pulse2 3s ease-in-out infinite",
        gridMove: "gridMove 8s linear infinite",
        orb:      "orb 7s ease-in-out infinite",
      },
    },
  },
  plugins: [],
}
