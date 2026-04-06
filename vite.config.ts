import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // ✅ ADDED: Ensures all assets are loaded relative to index.html
  // This prevents 404s on sub-routes when using HashRouter
  base: "./", 

  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  
  // CLEANED: Removed lovable-tagger from the plugins array
  plugins: [
    react(),
  ],
  
  build: {
    // SECURITY: Prevents original source code from being visible in Inspect Element
    sourcemap: false, 
    minify: "esbuild",
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        // Keeps filenames generic for privacy
        manualChunks: undefined, 
      },
    },
  },

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    dedupe: [
      "react", 
      "react-dom", 
      "react/jsx-runtime", 
      "react/jsx-dev-runtime", 
      "@tanstack/react-query", 
      "@tanstack/query-core"
    ],
  },
}));