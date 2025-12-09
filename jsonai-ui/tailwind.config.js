/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        midnight: {
          100: "var(--color-midnight-100)",
          DEFAULT: "var(--color-midnight)",
        },
        // add more if you want:
        washedblue: {
          primary: "var(--color-washedblue-primary)",
        },
      },
    },
  },
  plugins: [],
};
