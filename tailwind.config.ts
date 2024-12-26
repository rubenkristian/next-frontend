import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        theme: "#41A0E4",
        quit: "#D83A56"
      },
      fontSize: {
        'small-text': ['0.625rem', '15px'],
        'normal-text': ['0.875rem', '21px'],
      }
    },
  },
  plugins: [],
} satisfies Config;
