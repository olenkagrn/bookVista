/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      colors: {
        customBorder: "#959389",
        customBackground: "#F1EFE3",
        customDark: "#2A2A2A",
        customAccentColor: "#FF4F5B",
      },
      fontFamily: {
        "oooh-baby": ['"Oooh Baby"', "cursive"],
      },
    },
  },
  plugins: [],
};
