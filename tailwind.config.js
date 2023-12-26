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
          100: "#ffffff",
          200: "#f6f8fa",
          300: "#f6f8fa",
          400: "#f6f8fa",
        },
        purple: {
          primary: "#ffffff",
          secondary: "#ffffff",
          light: "#ffffff",
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
        16: "160px",
      },
      fontSize: {
        "095": "0.6rem",
      },
    },
  },
  plugins: [],
};
