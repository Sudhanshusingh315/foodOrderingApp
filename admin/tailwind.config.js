/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xl: "1024px",
        "2xl": "1024px",
      },
      container: {
        center: true,
        // padding: "2rem",
      },
    },
  },
  plugins: [],
};
