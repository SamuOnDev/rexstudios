/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        base: "#EEEEEE",
        surface: "#E6E6E6",
        surfaceAlt: "#D9D9D9",
        text: "#1A1A1A",
        secondary: "#64C186",
        secondaryDark: "#3D9463",
        blueAccent: "#2ea1ff",
        blueAccentDark: "#005fb3",
        purpleAccent: "#9e2896",
        purpleAccentDark: "#631a66",
      },
      fontFamily: {
        heading: ["var(--font-outfit)"],
        body: ["var(--font-inter)"],
      },
      boxShadow: {
        card: '0 4px 20px rgba(0, 0, 0, 0.15)',
        hover: '0 6px 24px rgba(0, 0, 0, 0.25)',
        soft: '0 2px 12px rgba(0, 0, 0, 0.1)'
      }
    },
  },
  plugins: [],
};
