/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      boxShadow: {
        "custom-1": "0px 2px 4px 0px rgba(0, 0, 0, 0.06)",
        "custom-2": "0px 2px 9px 0px rgba(0, 0, 0, 0.05)",
        "custom-3": "0px 0px 7px 2px rgba(0, 0, 0, 0.03)",
        "custom-4": "0px 0px 7px 0px rgba(0, 0, 0, 0.29)",
        "custom-5": " 0px 0px 4px 1px rgba(0, 0, 0, 0.10)",
      },
      colors: {
        textBlack: "#111517",
        primaryDark: "#2B3844",
        secondaryDark: "#202C36",
        primaryLight: "#FAFAFA",
        secondaryLight: "#fff",
      },
      fontFamily: {
        nunito: ["Nunito Sans", "sans-serif"],
      },
    },
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
    },
  },
};
