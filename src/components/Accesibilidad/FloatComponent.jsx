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

const FloatComponent = ({ showTable, setShowTable, isMobile }) => {
  const [reset, setReset] = useState(false);

  // Estilos base del contenedor principal
  const containerStyles = {
    position: "fixed",
    bottom: "0",
    left: "0",
    width: "100%",
    zIndex: "150",
    display: showTable ? "block" : "none",
    backgroundColor: "#eff1f5",
    boxShadow: "0 -2px 10px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.3s ease",
    transform: showTable ? "translateY(0)" : "translateY(100%)",
  };

  // Estilos del contenido que empuja el resto de la página
  const pagePaddingStyles = {
    paddingBottom: showTable ? (isMobile ? "200px" : "35vh") : "0",
    transition: "padding-bottom 0.3s ease",
  };

  // Estilos del header
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

  const contenedorStyles = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    padding: "0.5rem 0",
    maxHeight: isMobile ? "200px" : "35vh",
    overflowY: "auto",
  };

  return (
    <>
      {/* Este div aplica el padding al contenido principal */}
      <div style={pagePaddingStyles} aria-hidden="true" />

      {/* Panel de accesibilidad */}
      <div style={containerStyles}>
        <div style={headerStyles}>
          {!isMobile && (
            <img src={logoSecretaria} style={{ height: "45px" }} alt="Logo" />
          )}
          <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
            <ResetComponent setReset={setReset} />
            <button
              onClick={() => setShowTable(false)}
              style={{
                backgroundColor: "#222a59",
                color: "white",
                border: "1px solid #222a59",
                borderRadius: "50%",
                padding: "1rem 1.3rem",
                cursor: "pointer",
                transition: "border 0.3s ease",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.border = "1px solid #ffffff")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.border = "1px solid #222a59")
              }
              aria-label="Cerrar menú de accesibilidad"
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
              isMobile={isMobile}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default FloatComponent;
