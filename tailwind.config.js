/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      keyframes: {
        skscaleout: {
          "0%": {
            transform: "scale(0)",
          },
          "100%": { transform: "scale(1.1); opacity: 0;" },
        },
      },
      animation: {
        skscaleout: "skscaleout 1s infinite ease-in-out",
      },
    },
  },
  plugins: [],
};
