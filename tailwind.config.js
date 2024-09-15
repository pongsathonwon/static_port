/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        deluge: {
          DEFAULT: "#7469B6",
          50: "#E6E4F2",
          100: "#DAD7EB",
          200: "#C0BBDE",
          300: "#A7A0D1",
          400: "#8D84C3",
          500: "#7469B6",
          600: "#574C9B",
          700: "#423976",
          800: "#2D2750",
          900: "#18142A",
          950: "#0D0B17",
        },
        perfume: {
          DEFAULT: "#BEADFA",
          50: "#ECE7FE",
          100: "#DCD3FC",
          200: "#BEADFA",
          300: "#9478F7",
          400: "#6A43F4",
          500: "#400FF0",
          600: "#320BBB",
          700: "#240886",
          800: "#160551",
          900: "#08021D",
          950: "#010002",
        },
      },
      keyframes: {
        right: {
          "0%, 100%": {
            transform: "translateX(25%)",
            "animation-timing-function": "cubic-bezier(0.8, 0, 1, 1)",
          },
          "50%": {
            transform: "translateX(0)",
            "animation-timing-function": "cubic-bezier(0, 0, 0.2, 1)",
          },
        },
        slideLeft: {
          to: {
            transform: "translateX(-500%)",
          },
        },
      },
      animation: {
        "spin-slow": "spin 10s linear infinite",
        "spin-slow-delay1": "spin 10s 1s linear infinite",
        "spin-slow-delay5": "spin 10s 5s linear infinite",
        "pulse-slow": "pulse 5s linear infinite",
        next: "right 1s infinite",
        silde: "slideLeft 60s linear infinite",
      },
      backgroundImage: {
        avatar: "url('../asset/avatar.jpg')",
        fil: "linear-gradient(to top, rgba(0,0,0,.2), transparent)",
      },
    },
  },
  plugins: [],
};
