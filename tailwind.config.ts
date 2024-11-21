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
        }

      },
      animation: {
        // fadeIn: "fadeIn 0.5s ease-in-out"
        elementFade : 'elementFade 0.9s ease-in',
        translate : 'translate 0.9s ease-in',
        blinking : 'blinking 3s ease-in infinite'
      },
    },
  },
  plugins: [],
} satisfies Config;
