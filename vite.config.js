import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  test: {
    globals: true, // This allows us to skip imports if we want, but explicit is safer
    environment: "jsdom",
    setupFiles: "./src/setupTests.js",
  },
});
