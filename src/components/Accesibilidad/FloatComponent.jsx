import { useState } from "react";
import ReadTextButton from "./ReadText/ReadTextButton";
import HighlightLinksButton from "./HighlightLinksButton/HighlightLinksButton";
import IncreaseHeadingSizeButton from "./IncreaseHeadingSizeButton/IncreaseHeadingSizeButton";
import ReadingGuide from "./ReadingGuide/ReadingGuide";
import ColorChanger from "./ColorChanger/ColorChanger";
import DislexiaToggle from "./DislexiaToggle/DislexiaToggle";
import ContrasteComponent from "./ContrasteComponent/ContrasteComponent";
import DaltonismoComponent from "./DaltonismoComponent/DaltonismoComponent";
import logoSecretaria from "./assets/img/modernizacion_blanco.png";
import ResetComponent from "./ResetComponent/ResetComponent";

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

  // Estilos base
  const floatComponentStyles = {
    position: "fixed",
    bottom: "0",
    left: "0",
    width: "100%",
    zIndex: "150",
    display: showTable ? "block" : "none",
  };

  const headerStyles = {
    backgroundColor: "#222a59",
    padding: "1rem",
    fontSize: "18px",
    fontWeight: "bolder",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    color: "white",
  };

  const columnStyles = {
    display: "flex",
    flexDirection: "row",
  };

  const closeButtonStyles = {
    backgroundColor: "#222a59",
    fontSize: "1rem",
    cursor: "pointer",
    color: "white",
    border: "1px solid #222a59",
    borderRadius: "50%",
    padding: "1rem 1.3rem",
    transition: "border 0.3s ease",
  };

  const closeButtonHoverStyles = {
    ...closeButtonStyles,
    border: "1px solid #ffffff",
  };

  const contenedorStyles = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    backgroundColor: "#eff1f5",
  };

  const imageStyles = {
    height: "45px",
  };

  const [currentCloseButtonStyle, setCurrentCloseButtonStyle] =
    useState(closeButtonStyles);

  // Estilos responsive
  const responsiveStyles =
    window.innerWidth <= 768
      ? {
          floatComponent: {
            ...floatComponentStyles,
            maxHeight: "40vh",
            overflowY: "auto",
          },
          itemIcon: {
            fontSize: "25px",
          },
          ...(window.innerWidth <= 500 && {
            header: {
              ...headerStyles,
              flexDirection: "column",
              padding: "0.5rem",
            },
            column: {
              ...columnStyles,
              marginTop: "0.5rem",
            },
            closeButton: {
              ...closeButtonStyles,
              fontSize: "0.8rem",
              padding: "0.3rem 0.6rem",
            },
            itemIcon: {
              fontSize: "20px",
            },
          }),
        }
      : {
          floatComponent: floatComponentStyles,
          itemIcon: {
            fontSize: "36px",
          },
        };

  return (
    <div style={responsiveStyles.floatComponent}>
      <div style={responsiveStyles.header || headerStyles}>
        <img src={logoSecretaria} style={imageStyles} alt="Logo" />
        <div style={responsiveStyles.column || columnStyles}>
          <ResetComponent setReset={setReset} />
          <button
            style={responsiveStyles.closeButton || currentCloseButtonStyle}
            onClick={() => setShowTable(false)}
            onMouseEnter={() =>
              setCurrentCloseButtonStyle(closeButtonHoverStyles)
            }
            onMouseLeave={() => setCurrentCloseButtonStyle(closeButtonStyles)}
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>
      </div>
      <div style={contenedorStyles}>
        {componentList.map((Component, index) => (
          <Component key={index} reset={reset} setReset={setReset} />
        ))}
      </div>
    </div>
  );
};

export default FloatComponent;
