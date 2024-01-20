/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html, js,jsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        text: "hsl(0, 0%, 100%)",
        background: "hsl(0, 0%, 8%)",
        primary: "hsl(75, 94%, 57%)",
        grey: "hsl(0, 0%, 20%)",
        darkGrey: "hsl(0, 0%, 12%)",
      },
    },
  },
  plugins: [],
};
