import React, { useState } from "react";

const DislexiaToggle = () => {
  const [isDyslexicFont, setDyslexicFont] = useState(false);

  const handleButtonClick = () => {
    const body = document.body;
    if (isDyslexicFont) {
      body.style.fontFamily = ""; // Vuelve a la fuente original o elimina esta línea si no es necesario
    } else {
      body.style.fontFamily = "Open-Dyslexic, sans-serif";
    }

    setDyslexicFont(!isDyslexicFont);
  };

  return (
    <button onClick={handleButtonClick}>
      {isDyslexicFont ? "Desactivar Dislexia" : "Activar Dislexia"}
    </button>
  );
};

export default DislexiaToggle;
