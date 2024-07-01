/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        shine: "url('./src/assets/shine.png')",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        inspiration: ["Inspiration", "cursive"],
      },
      colors: {
        primary: {
          lite: "#E7DAED",
          default: "#57007B",
          dark: "#F76680",
        },
        gradient: {
          lite: "#FFEF5E",
          default: "#F7936F",
        },
        gray: {
          50: "#FAFAFA",
          400: "#CBD5E0",
          500: "#A0AEC0",
          600: "#718096",
          700: "#4A5568",
          800: "#2D3748",
          900: "#1A202C",
        },
      },
    },
  },
  plugins: [],
};
