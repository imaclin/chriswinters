import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#002244",
          dark: "#001530",
          mid: "#003366",
        },
        gold: {
          DEFAULT: "#b8975a",
          light: "#d4af72",
        },
        "off-white": "#f8f7f4",
        "light-gray": "#e8e6e1",
        "mid-gray": "#9a9490",
        "text-dark": "#1a1a1a",
        "text-body": "#3a3633",
      },
      fontFamily: {
        serif: ["var(--font-merriweather)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "Inter", "Helvetica Neue", "Arial", "sans-serif"],
      },
      maxWidth: {
        container: "1100px",
      },
      borderRadius: {
        DEFAULT: "4px",
      },
      boxShadow: {
        sm: "0 2px 12px rgba(0, 0, 0, 0.08)",
        md: "0 6px 32px rgba(0, 0, 0, 0.14)",
      },
    },
  },
  plugins: [],
};

export default config;
