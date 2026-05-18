import { useState, useEffect } from "react";
import ReadTextButton from "./ReadText/ReadTextButton";
import HighlightLinksButton from "./HighlightLinksButton/HighlightLinksButton";
import IncreaseHeadingSizeButton from "./IncreaseHeadingSizeButton/IncreaseHeadingSizeButton";
import ReadingGuide from "./ReadingGuide/ReadingGuide";
import ColorChanger from "./ColorChanger/ColorChanger";
import DislexiaToggle from "./DislexiaToggle/DislexiaToggle";
import ContrasteComponent from "./ContrasteComponent/ContrasteComponent";
import DaltonismoComponent from "./DaltonismoComponent/DaltonismoComponent";
import ResetComponent from "./ResetComponent/ResetComponent";

const componentList = [
  HighlightLinksButton,
  DislexiaToggle,
  ContrasteComponent,
  DaltonismoComponent,
  ReadingGuide,
  ColorChanger,
  IncreaseHeadingSizeButton,
  ReadTextButton,
];

const FloatComponent = ({ showTable, setShowTable }) => {
  const [reset, setReset] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 640);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 640);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Cerrar con Escape
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && showTable) {
        setShowTable(false);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [showTable, setShowTable]);

  // IMPORTANTE: NO usar transform en el popup — rompe position:fixed de los hijos
  // (la línea guía y otros overlays quedan atrapados en el contexto del popup).
  // Se anima solo con opacity + bottom para preservar el comportamiento fixed.
  const popupStyle = {
    position: "fixed",
    bottom: showTable
      ? isMobile
        ? "82px"
        : "90px"
      : isMobile
        ? "74px"
        : "82px",
    right: isMobile ? "12px" : "16px",
    width: isMobile
      ? "min(260px, calc(100vw - 24px))"
      : "min(300px, calc(100vw - 32px))",
    maxHeight: isMobile ? "44vh" : "min(520px, calc(100vh - 120px))",
    backgroundColor: "white",
    borderRadius: "12px",
    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.18), 0 2px 8px rgba(0, 0, 0, 0.08)",
    overflow: "hidden",
    zIndex: 200,
    display: "flex",
    flexDirection: "column",
    opacity: showTable ? 1 : 0,
    transition: "opacity 0.2s ease, bottom 0.2s ease",
    pointerEvents: showTable ? "auto" : "none",
    fontFamily: "Inter, system-ui, Avenir, Helvetica, Arial, sans-serif",
  };

  const variant = isMobile ? "list-compact" : "list";

  const headerStyle = {
    backgroundColor: "#222a59",
    color: "white",
    padding: isMobile ? "10px 12px" : "14px 16px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexShrink: 0,
  };

  const titleStyle = {
    fontSize: isMobile ? "13px" : "15px",
    fontWeight: "700",
    margin: 0,
    lineHeight: "1.3",
  };

  const closeButtonStyle = {
    background: "none",
    border: "none",
    color: "white",
    cursor: "pointer",
    padding: "4px 8px",
    borderRadius: "6px",
    fontSize: "16px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  };

  const listStyle = {
    overflowY: "auto",
    flex: 1,
  };

  return (
    <div
      style={popupStyle}
      role="dialog"
      aria-label="Panel de accesibilidad"
      aria-hidden={!showTable}
    >
      <div style={headerStyle}>
        <h2 style={titleStyle}>Herramientas de accesibilidad</h2>
        <button
          style={closeButtonStyle}
          onClick={() => setShowTable(false)}
          aria-label="Cerrar panel"
          onMouseEnter={(e) =>
            (e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.2)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.backgroundColor = "transparent")
          }
        >
          <i className="fa-solid fa-xmark" />
        </button>
      </div>

      <div style={listStyle}>
        {componentList.map((Component, index) => (
          <Component
            key={index}
            reset={reset}
            setReset={setReset}
            variant={variant}
          />
        ))}
        <ResetComponent setReset={setReset} variant={variant} />
      </div>
    </div>
  );
};

export default FloatComponent;
