/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: {
          dark: "#1A0B2E",
          royal: "#6C2BD9",
          bright: "#A855F7",
          lavender: "#DDD6FE",
          tint: "#FAF5FF",
        },
        accent: {
          gold: "#F59E0B"
        }
      },
      fontFamily: {
        heading: ["Playfair Display", "serif"],
        body: ["Inter", "sans-serif"],
        accent: ["Urbanist", "sans-serif"],
      },
    },
  },
  plugins: [],
}
