/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: "Open Sans",
        serif: "Roboto Slab",
      },
      colors: {
        primary: "#5E2CD1",
        secondary: "#F15B90",
        tertiary: "#67AAF9",
      },
    },
  },
  plugins: [],
};
