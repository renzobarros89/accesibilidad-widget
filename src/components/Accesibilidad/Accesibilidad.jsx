import { useEffect, useState } from "react";
import FloatComponent from "./FloatComponent";
import imgAccesibilidad from "./assets/img/accesibilidad.png";

const Accesibilidad = () => {
  const [showTable, setShowTable] = useState(false);

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.altKey && event.key === "a") {
        setShowTable((prevShowTable) => !prevShowTable);
      }
    };

    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  // Estilos inline
  const buttonStyles = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "60px",
    height: "60px",
    position: "fixed",
    bottom: "20px",
    right: "20px",
    padding: "10px",
    fontSize: "47px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "50%",
    cursor: "pointer",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
    outline: "none",
    transition: "background-color 0.3s ease",
  };

  const buttonHoverStyles = {
    ...buttonStyles,
    backgroundColor: "#0653a5",
  };

  const tooltipStyles = {
    display: "none",
    position: "absolute",
    backgroundColor: "rgba(0, 123, 255, 0.5)",
    color: "white",
    padding: "5px",
    borderRadius: "5px",
    fontSize: "12px",
    top: "-20px",
    left: "-10%",
    transform: "translateX(-50%)",
    width: "40px",
  };

  const imageStyles = {
    backgroundColor: "white",
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    padding: "5px",
  };

  const [currentButtonStyle, setCurrentButtonStyle] = useState(buttonStyles);

  return (
    <>
      <FloatComponent showTable={showTable} setShowTable={setShowTable} />
      <button
        style={currentButtonStyle}
        onClick={() => setShowTable(!showTable)}
        onMouseEnter={() => setCurrentButtonStyle(buttonHoverStyles)}
        onMouseLeave={() => setCurrentButtonStyle(buttonStyles)}
      >
        <img src={imgAccesibilidad} alt="Accesibilidad" style={imageStyles} />
        <span style={tooltipStyles}>Alt + A</span>
      </button>
    </>
  );
};

export default Accesibilidad;
