import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  base: "/accesibilidad-widget/",
  plugins: [react()],
  define: {
    "process.env": {}, // Previene errores al referirse a process.env
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
