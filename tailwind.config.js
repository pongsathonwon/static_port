/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
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
      white: "#fff",
      black: "#000",
      red: "#ef4444",
      blue: "#3b82f6",
      amber: "#f59e0b",
      primary: {
        DEFAULT: "rgba(var(--color-primary-1)/<alpha-value>)",
        1: "rgba(var(--color-primary-1)/<alpha-value>)",
        2: "rgba(var(--color-primary-2)/<alpha-value>)",
      },
      secondary: "rgba(var(--color-secondary)/<alpha-value>)",
      neutral: "rgba(var(--color-neutral)/<alpha-value>)",
    },
    extend: {
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
      },
      animation: {
        "spin-slow": "spin 10s linear infinite",
        "spin-slow-delay1": "spin 10s 1s linear infinite",
        "spin-slow-delay5": "spin 10s 5s linear infinite",
        "pulse-slow": "pulse 5s linear infinite",
        next: "right 1s infinite",
      },
      backgroundImage: {
        avatar: "url('../asset/avatar.jpg')",
        fil: "linear-gradient(to top, rgba(0,0,0,.2), transparent)",
        g1: "conic-gradient(var(--color-gradient-2),var(--color-gradient-1),var(--color-gradient-2))",
        g2: "conic-gradient(var(--color-gradient-1),var(--color-gradient-3),var(--color-gradient-1))",
        g3: "conic-gradient(var(--color-gradient-1),var(--color-gradient-3),var(--color-gradient-1),var(--color-gradient-2),var(--color-gradient-1))",
        g4: "conic-gradient(var(--color-gradient-1),var(--color-gradient-3),var(--color-gradient-1),var(--color-gradient-2),var(--color-gradient-1))",
      },
    },
  },
  plugins: [],
};
