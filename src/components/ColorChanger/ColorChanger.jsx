import React, { useState } from "react";

const ColorChanger = () => {
  const [currentColorIndex, setCurrentColorIndex] = useState(0);
  const colors = ["blue", "red", "green", "orange", "white", "black"];

  const handleColorChange = () => {
    const nextColorIndex = (currentColorIndex + 1) % colors.length;
    setCurrentColorIndex(nextColorIndex);
    applyColorToElements(colors[nextColorIndex]);
  };

  const applyColorToElements = (color) => {
    // Aplicar el color a todos los elementos deseados
    const elements = document.querySelectorAll("h1, h2, h3, p, button, a");
    elements.forEach((element) => {
      element.style.color = color;
    });
  };

  return (
    <div>
      <button onClick={handleColorChange}>Cambiar Color</button>
      {/* Contenido de tu aplicación */}
      <h1>Título</h1>
      <p>Párrafo</p>
      <button>Botón</button>
      <a href="#">Enlace</a>
      {/* Otros elementos de tu aplicación */}
    </div>
  );
};

export default ColorChanger;
