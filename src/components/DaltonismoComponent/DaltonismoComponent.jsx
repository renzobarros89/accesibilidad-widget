import { useState } from "react";
import styles from "../FloatComponent.module.css";

const DaltonismoComponent = () => {
  const [tiposDaltonismo, setTiposDaltonismo] = useState([
    "",
    "protanopia",
    "deuteranopia",
    "tritanopia",
    "monocromo",
  ]);
  const [indiceTipoDaltonismo, setIndiceTipoDaltonismo] = useState(0);

  const cambiarTipoDaltonismo = () => {
    const nuevoIndice = (indiceTipoDaltonismo + 1) % tiposDaltonismo.length;
    setIndiceTipoDaltonismo(nuevoIndice);
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
      // Agrega más casos según sea necesario para otros tipos de daltonismo
      default:
        // Restaurar el filtro predeterminado si no se selecciona un tipo de daltonismo
        root.style.cssText = `filter: none;`;
    }
  };

  return (
    <>
      <div className={styles.item} onClick={cambiarTipoDaltonismo}>
        <div
          className={styles.inner}
          style={{ display: indiceTipoDaltonismo !== 0 ? "block" : "none" }}
        >
          <i className="fa-solid fa-check"></i>
        </div>
        <i className="fas fa-eye"></i>
        <p>{tiposDaltonismo[indiceTipoDaltonismo] || "Ninguno"}</p>
      </div>
    </>
  );
};

export default DaltonismoComponent;
