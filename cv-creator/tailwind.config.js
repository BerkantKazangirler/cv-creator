/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        940: "940px",
      },
      fontFamily: {
        inter: ["inter"],
        rubik: ["rubik"],
        lexend: ["Lexend"],
      },
      borderWidth: {
        3: ["3px"],
      },
      fontSize: {
        "2sm": "12px",
      },
      padding: {
        27: "60px",
      },
      colors: {
        "double-primary-black": "#000000",
        "double-main-blue": "#1E90FF",
        "double-about": "#3E3E3E",
        "double-grey": "#E4E4E4",
      },
    },
  },
  plugins: [],
};
