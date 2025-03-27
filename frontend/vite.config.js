import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      // Proxy all requests starting with '/api' to your backend
      "/api": {
        target: "http://localhost:3000", // Your backend server
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""), // Remove '/api' prefix
      },
    },
  },
});