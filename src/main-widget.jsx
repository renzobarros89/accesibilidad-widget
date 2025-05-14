// 👇 INICIO
const dyslexicFont = document.createElement("link");
dyslexicFont.rel = "stylesheet";
dyslexicFont.href = "https://fonts.cdnfonts.com/css/open-dyslexic";
document.head.appendChild(dyslexicFont);

const fontAwesome = document.createElement("link");
fontAwesome.rel = "stylesheet";
fontAwesome.href =
  "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css";
fontAwesome.integrity =
  "sha384-3B6NwesSXE7YJlcLI9RpRqGf2p/EgVH8BgoKTaUrmKNDkHPStTQ3EyoYjCGXaOTS";
fontAwesome.crossOrigin = "anonymous";
document.head.appendChild(fontAwesome);

// 👇 Código React
import React from "react";
import ReactDOM from "react-dom/client";
import Accesibilidad from "./components/Accesibilidad/Accesibilidad.jsx";

const container = document.createElement("div");
container.id = "accesibilidad-widget";
document.body.appendChild(container);

ReactDOM.createRoot(container).render(
  <React.StrictMode>
    <Accesibilidad />
  </React.StrictMode>
);
