import type { Config } from "tailwindcss";
import markdown from "./presets/markdown";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: 'rgb(0, 0, 51)',
        'background-light': 'rgb(25, 25, 52)',
        'background-dark': 'rgb(0, 0, 130)',
        text: 'rgb(235, 236, 243)',
        brand: 'rgb(0, 0, 255)',
      },
      fontSize: {
        'xs': '1.6rem',
        'sm': '1.8rem',
        'md': '2.2rem',
        'lg': '3.6rem',
        'xl': '5.6rem',
        '2xl': '9.6rem',
      },
    },
  },
  presets: [markdown],
  plugins: [],
} satisfies Config;
