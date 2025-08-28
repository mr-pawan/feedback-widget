import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  define: {
    "process.env": {}, // fix process undefined
  },
  build: {
    lib: {
      entry: "src/main.jsx",
      name: "FeedbackWidget",
      formats: ["umd"],
      fileName: () => `feedback-widget.js`,
    },
    rollupOptions: {
      // ✅ do not mark react/react-dom external
      // bundle them into your widget
    },
  },
});
