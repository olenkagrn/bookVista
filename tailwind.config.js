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
      backgroundColor: {
        "loader-background": "#3498db",
      },
      keyframes: {
        loading: {
          "0%, 100%": { transform: "scaleY(1)" },
          "50%": { transform: "scaleY(1.5)" },
        },
      },
      animation: {
        // animate-loading клас
        loading: "loading 0.8s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
