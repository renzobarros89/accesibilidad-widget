import { useEffect, useState } from "react";
import FloatComponent from "./FloatComponent";
import imgAccesibilidad from "./assets/img/accesibilidad.png";

const Accesibilidad = () => {
  const [showTable, setShowTable] = useState(false);

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

  const imageStyles = {
    backgroundColor: "white",
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    padding: "5px",
  };

  const [currentButtonStyle, setCurrentButtonStyle] = useState(buttonStyles);

  // Atajo de teclado Alt+A
  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.altKey && event.key === "a") {
        setShowTable((prev) => !prev);
      }
    };

    document.addEventListener("keydown", handleKeyPress);
    return () => document.removeEventListener("keydown", handleKeyPress);
  }, []);

  return (
    <>
      <FloatComponent showTable={showTable} setShowTable={setShowTable} />
      <button
        style={currentButtonStyle}
        onClick={() => setShowTable(!showTable)}
        onMouseEnter={() => setCurrentButtonStyle(buttonHoverStyles)}
        onMouseLeave={() => setCurrentButtonStyle(buttonStyles)}
        aria-label="Abrir panel de accesibilidad"
        title="Panel de accesibilidad (Alt+A)"
      >
        <img src={imgAccesibilidad} alt="" style={imageStyles} />
      </button>
    </>
  );
};

export default Accesibilidad;
