/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#635fc5",
        secondary: "#4d4aa1",
        dark: "#21212d",
        dark2: "#2c2c37",
        "primary-text": "#eeeff3",
        "secondary-text": "#656482",
        pending: "#47c2e6",
        progress: "#47c2e6",
        done: "#6ae6b0",
      },
    },
  },
  plugins: [],
};
