/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: "#f5f1e8",
        ink: "#161616",
        accent: "#0f5f5a",
        primary: "#0f5f5a",
        secondary: "#f5f1e8",
        third: "#161616",
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
};
