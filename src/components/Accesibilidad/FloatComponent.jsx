import styles from "./FloatComponent.module.css";
import ReadTextButton from "./ReadText/ReadTextButton";
import HighlightLinksButton from "./HighlightLinksButton/HighlightLinksButton";
import IncreaseHeadingSizeButton from "./IncreaseHeadingSizeButton/IncreaseHeadingSizeButton";
import ReadingGuide from "./ReadingGuide/ReadingGuide";
import ColorChanger from "./ColorChanger/ColorChanger";
import DislexiaToggle from "./DislexiaToggle/DislexiaToggle";
import ContrasteComponent from "./ContrasteComponent/ContrasteComponent";
import DaltonismoComponent from "./DaltonismoComponent/DaltonismoComponent";
import logo from "./assets/img/accesibilidad_blanco.png";
import logoSecretaria from "./assets/img/secretaria.png";
import ResetComponent from "./ResetComponent/ResetComponent";
import { useState } from "react";

const componentList = [
  ReadTextButton,
  HighlightLinksButton,
  IncreaseHeadingSizeButton,
  ReadingGuide,
  ColorChanger,
  DislexiaToggle,
  ContrasteComponent,
  DaltonismoComponent,
];

const FloatComponent = ({ showTable, setShowTable }) => {
  const [reset, setReset] = useState(false);

  return (
    <>
      <div
        className={styles.floatComponent}
        style={{ display: showTable ? "block" : "none" }}
      >
        <div className={styles.titulo}>
          <img src={logo} />
          <button
            className={styles.closeButton}
            onClick={() => setShowTable(false)}
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>
        <div className={styles.contenedor}>
          <div className={styles.itemContainer}>
            {componentList.map((Component, index) => (
              <Component key={index} reset={reset} setReset={setReset} />
            ))}
          </div>
          <div className={styles.reset}>
            <ResetComponent setReset={setReset} />
            <img src={logoSecretaria} />
          </div>
        </div>
      </div>
    </>
  );
};

export default FloatComponent;
