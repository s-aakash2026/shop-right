/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui"

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3A5A40",
        secondary: "#DAD7CD",
        accent: "#D4A373",
        amazon_btn: "#FFD814",
        dark: "#344E41"
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 2px 8px rgba(0, 0, 0, 0.08)',
        'card-hover': '0 12px 24px rgba(58, 90, 64, 0.15)',
      }
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: ["light"],
  },
}
