import { useEffect, useState } from "react";
import ButtonComponent from "../ButtonComponent";

const ContrasteComponent = ({ reset, setReset, variant }) => {
  const [estiloContraste, setEstiloContraste] = useState("");

  const cambiarEstiloContraste = () => {
    const modos = ["", "invertido", "oscuro", "claro"];
    const idx = modos.indexOf(estiloContraste);
    const siguiente = modos[(idx + 1) % modos.length];
    setEstiloContraste(siguiente);
    aplicarEstiloContraste(siguiente);
  };

  const aplicarEstiloContraste = (modo) => {
    const root = document.documentElement;
    root.style.filter = "";
    root.classList.remove("contrast-dark", "contrast-light");

    if (modo === "invertido") {
      root.style.filter = "invert(1)";
    } else if (modo === "oscuro") {
      root.classList.add("contrast-dark");
    } else if (modo === "claro") {
      root.classList.add("contrast-light");
    }
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
      variant={variant}
    />
  );
};

export default ContrasteComponent;
