import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "../../packages/ui/src/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        "rh-black": "#0A0A0A",
        "rh-anthracite": "#1A1A1A",
        "rh-silver": "#C0C0C0",
        "rh-night": "#1A2333"
      },
      fontFamily: {
        sans: ["Inter", "Satoshi", "system-ui", "sans-serif"]
      }
    }
  },
  plugins: []
};

export default config;
