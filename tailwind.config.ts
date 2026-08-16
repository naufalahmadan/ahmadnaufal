import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#12201C",       // base — deep bottle-green-black
        surface: "#1B2E27",   // card/section surface
        surface2: "#233A32",  // slightly lighter surface
        stamp: "#FF3D7F",     // primary accent — hot magenta "stamp ink"
        gold: "#FFC940",      // secondary accent — verified/gold highlight
        paper: "#F3EFE4",     // warm off-white text
        muted: "#8FA39A",     // muted warm-green grey
        line: "#2C453C",      // hairline / border color
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        "grain": "radial-gradient(circle at 1px 1px, rgba(243,239,228,0.035) 1px, transparent 0)",
      },
    },
  },
  plugins: [],
};
export default config;
