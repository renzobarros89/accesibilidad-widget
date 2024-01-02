import React, { useState } from "react";

function HighlightLinksAndButtonsButton() {
  const [highlight, setHighlight] = useState(false);

  const handleClick = () => {
    setHighlight(!highlight);

    // Seleccionar tanto enlaces como botones
    const elementsToHighlight = document.querySelectorAll("a, button");

    elementsToHighlight.forEach((element) => {
      element.classList.toggle("highlighted", highlight);
    });
  };

  return (
    <div>
      <button onClick={handleClick}>
        {highlight ? "Desactivar resaltado" : "Activar resaltado"}
      </button>
      <style>
        {`
          .highlighted {
            background-color: yellow; /* Color de fondo para botones resaltados */
            text-decoration: underline; /* Subrayado para enlaces resaltados */
            color: black; /* Color del texto para enlaces resaltados */
          }
        `}
      </style>
    </div>
  );
}

export default HighlightLinksAndButtonsButton;
