import { useState, useEffect } from "react";
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
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [currentCloseButtonStyle, setCurrentCloseButtonStyle] = useState({
    backgroundColor: "#222a59",
    fontSize: "1rem",
    cursor: "pointer",
    color: "white",
    border: "1px solid #222a59",
    borderRadius: "50%",
    padding: "1rem 1.3rem",
    transition: "border 0.3s ease",
  });

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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

  const headerMobileStyles = {
    ...headerStyles,
    justifyContent: "center",
  };

  const columnStyles = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "1rem",
  };

  const closeButtonHoverStyles = {
    ...currentCloseButtonStyle,
    border: "1px solid #ffffff",
  };

  const contenedorStyles = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    backgroundColor: "#eff1f5",
    padding: "0.5rem 0",
  };

  const imageStyles = {
    height: "45px",
    display: isMobile ? "none" : "block",
  };

  // Estilos responsive
  const responsiveStyles = isMobile
    ? {
        floatComponent: {
          ...floatComponentStyles,
          maxHeight: "35vh",
          overflowY: "auto",
        },
        header: headerMobileStyles,
        itemIcon: {
          fontSize: "16px",
        },
        itemCard: {
          height: "30px", // Reducido de 45px
          width: "50px", // Reducido de 70px
          margin: "0.2rem",
          padding: "0.2rem",
          fontSize: "8px", // Reducido de 9px
        },
        closeButton: {
          ...currentCloseButtonStyle,
          fontSize: "0.8rem",
          padding: "0.5rem 0.8rem",
        },
      }
    : {
        floatComponent: {
          ...floatComponentStyles,
          maxHeight: "35vh",
          overflowY: "auto",
        },
        header: headerStyles,
        itemIcon: {
          fontSize: "16px",
        },
        itemCard: {
          height: "50px",
          width: "80px",
          margin: "0.3rem",
          padding: "0.3rem",
          fontSize: "10px",
        },
      };

  return (
    <div style={responsiveStyles.floatComponent}>
      <div style={responsiveStyles.header}>
        {!isMobile && (
          <img src={logoSecretaria} style={imageStyles} alt="Logo" />
        )}
        <div style={columnStyles}>
          <ResetComponent setReset={setReset} />
          <button
            style={
              isMobile ? responsiveStyles.closeButton : currentCloseButtonStyle
            }
            onClick={() => setShowTable(false)}
            onMouseEnter={() =>
              setCurrentCloseButtonStyle(closeButtonHoverStyles)
            }
            onMouseLeave={() =>
              setCurrentCloseButtonStyle({
                ...currentCloseButtonStyle,
                border: "1px solid #222a59",
              })
            }
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>
      </div>
      <div style={contenedorStyles}>
        {componentList.map((Component, index) => (
          <Component
            key={index}
            reset={reset}
            setReset={setReset}
            responsiveStyles={responsiveStyles}
          />
        ))}
      </div>
    </div>
  );
};

export default FloatComponent;
