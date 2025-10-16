/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#1c1b1a",
        parchment: "#f4efe6",
        accent: "#3b82f6",
        amber: "#f59e0b",
      },
      fontFamily: {
        serif: ["var(--font-playfair)"],
        sans: ["var(--font-inter)"],
      },
      boxShadow: {
        soft: "0 10px 30px -12px rgba(0,0,0,0.25)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
