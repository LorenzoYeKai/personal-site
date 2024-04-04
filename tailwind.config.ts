import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      keyframes: {
        blink: {
          "50%": {
            opacity: "0",
          },
        },
        jelly: {
          "0%": {
            width: "100%",
            transform:
              "scale(1.25,1) skewX(20deg) translateY(3px) rotateX(40deg) rotateY(10deg) rotateZ(-10deg)",
          },
          "50%": {
            width: "100%",
            transform:
              "scale(1.25,1.1) skewX(-15deg) translateY(-2px) translateZ(-30px)",
          },
          "100%": {
            width: "100%",
            transform:
              "scale(1.25,1) skewX(20deg) translateY(3px) rotateX(-40deg) rotateY(-10deg) rotateZ(-15deg)",
          },
        },
      },
      animation: {
        blink: "blink 200ms step-start 0s infinite",
        "reverse-blink": "blink 200ms step-start 0s infinite reverse",
        jelly: "jelly 350ms infinite",
        "reverse-jelly": "jelly 350ms infinite reverse",
      },
    },
  },
  plugins: [],
} satisfies Config;
