/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#F4E4D8",
        burgundy: "#6B2426",
        accent: "#7B2B35",
        accentSoft: "#A15B63",
        ink: {
          900: "#3B2A26",
          800: "#4A3430",
          700: "#5A4541",
        },
        borderNeutral: "rgba(99,71,65,0.18)",
      },
      fontFamily: {
        serif: ['"Playfair Display"', "serif"],
        sans: ['"Inter"', "system-ui", "-apple-system", "Segoe UI", "Roboto", "Arial", "sans-serif"],
      },
      borderRadius: {
        card: "20px",
      },
      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,0.08)",
      },
      maxWidth: {
        content: "1120px",
      },
    },
  },
  plugins: [],
};
