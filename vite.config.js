import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  define: {
    "process.env": {}, // prevent process undefined errors
  },
  build: {
    lib: {
      entry: "src/main.jsx",
      name: "FeedbackWidget",
      formats: ["umd"],
      fileName: () => `feedback-widget.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});
