/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('./public/header_img.png')",
      },
      screens: {
        xl: "1024px",
        "2xl": "1024px",
      },
      animation: {
        fadeIn: "fadeIn 2s",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
    },
    container: {
      center: true,
      padding: "2rem",
    },
  },
  plugins: [],
};
