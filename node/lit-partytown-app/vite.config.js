import { defineConfig } from "vite";
import path from "path";
import { partytownVite } from "@builder.io/partytown/utils";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    partytownVite({
      dest: path.join(__dirname, "dist", "~partytown"),
    }),
  ],
  build: {
    lib: {
      entry: "src/my-element.js",
      formats: ["es"],
    },
    rollupOptions: {
      external: /^lit/,
    },
  },
});
