/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
        colors: {
            customDarkGray: "#292929",
            customDarkRed: "#CE2829",
        },
    },
  },
  plugins: [],
}