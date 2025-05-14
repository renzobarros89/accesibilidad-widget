import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  base: "/",
  plugins: [react()],
  build: {
    lib: {
      entry: resolve(__dirname, "src/main-widget.jsx"),
      name: "AccesibilidadWidget",
      fileName: "widget-accesibilidad",
      formats: ["iife"],
    },
  },
});
