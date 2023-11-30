/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "gray-custom": {
          100: "#0c0e1b",
          200: "#131528",
          300: "#131528",
          400: "#131528",
        },
        purple: {
          primary: "#00d084",
          secondary: "#00d084",
          light: "#1fc7d4",
        },
      },
      fontFamily: {
        "dm-mono": ["DM Mono", "monospace"],
        "general-sans": ["General Sans", "sans-serif"],
      },
      maxHeight: {
        480: "30rem",
      },
      backdropBlur: {
        32: "32px",
      },
      space: {
        20: "20px",
      },
      fontSize: {
        16: "16px",
      },
      fontSize: {
        "095": "0.6rem",
      },
    },
  },
  plugins: [],
};
