import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        elementFade:{
          '0%' : { opacity : '0' },
          '100%' : { opacity : '1' }
        },
        translate : {
          '0%' : { transform : 'translateX(-300px)' , opacity : '0'},
          '100%' : { transform : 'translateX(0px)', opacity : '1' }
        },
        blinking : {
          '0%' : {opacity : '0'},
          '50%':{ opacity : '1' },
          '100%' : { opacity : '0' }
        },blinkingImg: {
          '0%': { backgroundImage: "url('./pic/riden.jpg')" },
          '50%': { backgroundImage: "url('./pic/riden2.jpg')" },
          '100%': { backgroundImage: "url('./pic/riden.jpg')" },
        }

      },
      animation: {
        elementFade : 'elementFade 0.9s ease-in',
        translate : 'translate 0.9s ease-in',
        blinking : 'blinking 3s ease-in infinite',
        blinkingImg:'blinkingImg 10s ease-in infinite'
      },
    },
  },
  plugins: [],
} satisfies Config;
