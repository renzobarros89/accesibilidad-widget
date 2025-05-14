// vite.config.js
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  base: "/accesibilidad-widget/",
  plugins: [react()],
  define: {
    "process.env.NODE_ENV": JSON.stringify("production"),
    "process.env": {}, // previene otros errores con process.env.X
  },
  build: {
    lib: {
      entry: resolve(__dirname, "src/main-widget.jsx"),
      name: "AccesibilidadWidget",
      fileName: "widget-accesibilidad",
      formats: ["iife"],
    },
  },
});
