import React, { useState } from "react";

const ContrasteComponent = () => {
  const [estiloContraste, setEstiloContraste] = useState("");

  const cambiarEstiloContraste = () => {
    let nuevoEstiloContraste = "";

    switch (estiloContraste) {
      case "":
        nuevoEstiloContraste = "invertido";
        aplicarEstiloContraste(`filter: invert(1)`);
        break;
      case "invertido":
        nuevoEstiloContraste = "oscuro";
        aplicarEstiloContraste(`
          background-color: rgb(0, 0, 0) !important;
          border-color: rgb(255, 255, 255) !important;
          color: rgb(80, 208, 160) !important;
        `);
        break;
      case "oscuro":
        nuevoEstiloContraste = "claro";
        aplicarEstiloContraste(`
          background-color: rgb(255, 255, 255) !important;
          border-color: rgb(0, 0, 0) !important;
          color: rgb(0, 0, 0) !important;
        `);
        break;
      case "claro":
        nuevoEstiloContraste = "";
        aplicarEstiloContraste("");
        break;
      default:
        nuevoEstiloContraste = "invertido";
        aplicarEstiloContraste("");
    }

    // Actualizar el estado después de aplicar el estilo
    setEstiloContraste(nuevoEstiloContraste);
  };

  const aplicarEstiloContraste = (estilo) => {
    const root = document.documentElement;
    root.style.cssText = estilo;
  };

  return (
    <div>
      <button onClick={cambiarEstiloContraste}>
        {estiloContraste
          ? estiloContraste.charAt(0).toUpperCase() + estiloContraste.slice(1)
          : "Normal"}
      </button>
    </div>
  );
};

export default ContrasteComponent;
