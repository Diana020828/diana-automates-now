import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: "dist",
    assetsDir: "assets",
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          // framer-motion is not forced into one chunk: LazyMotion loads its
          // animation features asynchronously after the first render
          vendor: ['react', 'react-dom', 'react-router-dom'],
        }
      }
    }
  },
  base: "/"
}));
  