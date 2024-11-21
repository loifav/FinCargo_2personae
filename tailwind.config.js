/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          bluelight: "#5885af", // Bleu clair personnalisé
          bluedark: "#223c60", // Bleu foncé
        },
        secondary: {
          bluelight: "#F472B6", // Rose clair
          bluedark: "#9D174D", // Rose foncé
        },
      },
    },
  },
  plugins: [],
};
