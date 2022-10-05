/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      screens: {
        sm: "640px",
        md: "910px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      keyframes: {
        skscaleout: {
          "0%": {
            transform: "scale(0)",
          },
          "100%": { transform: "scale(1.1)", opacity: 0 },
        },
      },
      animation: {
        skscaleout: "skscaleout 1s infinite ease-in-out",
      },
      fontFamily: {
        body: ["poppins", "Helvetica", "sans-serif"],
      },
    },
  },
  plugins: [],
};
