import { useEffect, useState } from "react";
import ButtonComponent from "../ButtonComponent";

const DaltonismoComponent = ({ reset, setReset }) => {
  const tiposDaltonismo = [
    "",
    "protanopia",
    "deuteranopia",
    "tritanopia",
    "monocromo",
  ];
  const [indiceTipoDaltonismo, setIndiceTipoDaltonismo] = useState(0);
  const [activo, setActivo] = useState(false);

  const cambiarTipoDaltonismo = () => {
    const nuevoIndice = (indiceTipoDaltonismo + 1) % tiposDaltonismo.length;
    setIndiceTipoDaltonismo(nuevoIndice);
    setActivo(nuevoIndice !== 0);
    aplicarEstiloDaltonismo(tiposDaltonismo[nuevoIndice]);
  };

  const aplicarEstiloDaltonismo = (tipo) => {
    const root = document.documentElement;
    switch (tipo) {
      case "protanopia":
        root.style.cssText = `filter: hue-rotate(30deg) !important;`;
        break;
      case "deuteranopia":
        root.style.cssText = `filter: hue-rotate(60deg) !important;`;
        break;
      case "tritanopia":
        root.style.cssText = `filter: hue-rotate(120deg) !important;`;
        break;
      case "monocromo":
        root.style.cssText = `filter: grayscale(100%) !important;`;
        break;
      default:
        root.style.cssText = `filter: none;`;
    }
  };

  useEffect(() => {
    if (reset) {
      setIndiceTipoDaltonismo(0);
      setActivo(false);
      aplicarEstiloDaltonismo("");
      setReset(false);
    }
  }, [reset, setReset]);

  return (
    <ButtonComponent
      activate={activo}
      setActivate={cambiarTipoDaltonismo}
      text={tiposDaltonismo[indiceTipoDaltonismo] || "Daltonismo"}
      icon="fas fa-eye"
    />
  );
};

export default DaltonismoComponent;
