import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { viteStaticCopy } from "vite-plugin-static-copy";

export default defineConfig({
  base: "/Accesibilidad-Component/",
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: "src/components/Accesibilidad/Accesibilidad.css",
          dest: "",
        },
      ],
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, "src/main-widget.jsx"),
      name: "AccesibilidadWidget",
      fileName: "widget-accesibilidad",
      formats: ["iife"],
    },
  },
});
