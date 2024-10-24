import type { Config } from "tailwindcss";
import daisyui from 'daisyui';

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#ECF0F3",
        foreground: "var(--foreground)",
        primary: "#ff014f",
        secondary: "#F5F5F5",
        gray: "#3c3e41",
      },
    },
  },
  plugins: [ daisyui ],
  daisyui: {
    themes: [
      {
        custom: {
          ...require("daisyui/src/theming/themes")["light"],
          primary: "ff014f",
          secondary: 'f4f4f4',
        },
      },
    ],
  }
};
export default config;
