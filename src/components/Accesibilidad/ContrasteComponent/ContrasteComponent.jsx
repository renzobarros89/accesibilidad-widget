import { useEffect, useState } from "react";
import ButtonComponent from "../ButtonComponent";

const ContrasteComponent = ({ reset, setReset }) => {
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

    setEstiloContraste(nuevoEstiloContraste);
  };

  const aplicarEstiloContraste = (estilo) => {
    const root = document.documentElement;
    root.style.cssText = estilo;
  };

  useEffect(() => {
    if (reset) {
      setEstiloContraste("");
      aplicarEstiloContraste("");
      setReset(false);
    }
  }, [reset, setReset]);

  return (
    <ButtonComponent
      activate={!!estiloContraste}
      setActivate={cambiarEstiloContraste}
      text={
        estiloContraste
          ? estiloContraste.charAt(0).toUpperCase() + estiloContraste.slice(1)
          : "Contraste"
      }
      icon="fa-solid fa-brush"
    />
  );
};

export default ContrasteComponent;
