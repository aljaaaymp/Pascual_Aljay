/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        kanit: ['Kanit', 'sans-serif'],
      },
      keyframes: {
        entrance: {
          "0%": { opacity: "0", transform: "translateX(250px)" },
          "38%": { opacity: "1", transform: "translateX(0)" },
          "55%": { transform: "translateX(65px)" },
          "72%": { transform: "translateX(0)" },
          "81%": { transform: "translateX(28px)" },
          "90%": { transform: "translateX(0)" },
          "95%": { transform: "translateX(8px)" },
          "100%": { transform: "translateX(0)" },
        },
        entrance2: {
          "0%": { opacity: "0", transform: "translateX(250px)" },
          "100%": { transform: "translateX(0)" },
        },
        fill: {
          "0%": { opacity: "0", transform: "translateX(-500px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        leftToRight: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(130px)" },
        },
        close: {
          "0%": { transform: "rotate(0)" },
          "100%": { transform: "rotate(-360deg)" },
        },
        scaleCenter: {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(0.5)" },
        },
      },
      animation: {
        entrance: "entrance 5s ease 0s 1 normal forwards",
        entrance2: "entrance2 1s ease 0s 1 normal forwards",
        close: "close 1s ease 0s 1 normal forwards",
        "left-to-right": "leftToRight 3s ease-in-out infinite",
        fill: "fill 2s ease 0s 1 normal forwards",
        "scale-center": "scaleCenter 1s ease 0s 1 normal forwards",
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar-hide"),
    // ...
  ],
};
