import React, { useState, useEffect } from "react";

const ReadingGuide2 = () => {
  const [buttonState, setButtonState] = useState("disabled");
  const [guideLinePosition, setGuideLinePosition] = useState(null);

  const handleButtonClick = () => {
    switch (buttonState) {
      case "disabled":
        setButtonState("enlargeCursor");
        break;
      case "enlargeCursor":
        setButtonState("generateGuideLine");
        break;
      case "generateGuideLine":
        setButtonState("disabled");
        break;
      default:
        break;
    }
  };

  const handleMouseMove = (e) => {
    if (buttonState === "generateGuideLine") {
      setGuideLinePosition(e.clientY);
    }
  };

  useEffect(() => {
    if (buttonState === "generateGuideLine") {
      window.addEventListener("mousemove", handleMouseMove);
    } else {
      window.removeEventListener("mousemove", handleMouseMove);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [buttonState]);

  const buttonStyles =
    buttonState === "enlargeCursor"
      ? { cursor: "zoom-in" }
      : buttonState === "generateGuideLine"
      ? {
          display: "none", // Ocultar el botón cuando se muestra la línea guía
        }
      : {};

  const guideLineStyles =
    buttonState === "generateGuideLine" && guideLinePosition !== null
      ? {
          boxSizing: "border-box",
          background: "#0d6efd",
          width: "100vw",
          position: "fixed",
          height: "2px",
          border: "solid 3px #0d6efd",
          borderRadius: "5px",
          top: `${guideLinePosition}px`,
          left: 0,
          zIndex: "2147483647",
        }
      : {};

  return (
    <div>
      <button onClick={handleButtonClick} style={buttonStyles}>
        {buttonState === "enlargeCursor"
          ? "Agrandar Cursor"
          : buttonState === "generateGuideLine"
          ? "Generar Línea de Guía"
          : "Desactivado"}
      </button>
      <div style={guideLineStyles}></div>
    </div>
  );
};

export default ReadingGuide2;
