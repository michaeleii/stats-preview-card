/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        primary: {
          900: "hsl(233, 47%, 7%)",
          800: "hsl(244, 38%, 16%)",
        },
        accent: "hsl(277, 64%, 61%)",
      },
    },
  },
  plugins: [],
};
