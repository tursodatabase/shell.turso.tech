import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  server: {
    fs: {
      allow: [".", "../../"],
    },
    define: {
      "process.env.NODE_DEBUG_NATIVE": "false", // string replace at build-time
    },
    headers: {
      "Cross-Origin-Opener-Policy": "same-origin",
      "Cross-Origin-Embedder-Policy": "require-corp",
    },
  },
  plugins: [tailwindcss()],
  optimizeDeps: {
    esbuildOptions: {
      define: { "process.env.NODE_DEBUG_NATIVE": "false" },
    },
  },
});
