import { useEffect, useState } from "react";

const ContrasteComponent = ({ reset, setReset }) => {
  const [estiloContraste, setEstiloContraste] = useState("");

  const itemStyles = {
    height: "70px",
    width: "120px",
    margin: "1rem",
    backgroundColor: "#fff",
    padding: "1rem",
    textAlign: "center",
    cursor: "pointer",
    borderRadius: "8px",
    position: "relative",
    fontSize: "14px",
    border: "solid transparent 2px",
    transition: "box-shadow 0.3s ease-in-out, border 0.3s ease-in-out",
  };

  const itemHoverStyles = {
    ...itemStyles,
    border: "solid 2px #222a59",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
  };

  const innerStyles = {
    borderRadius: "50%",
    height: "20px",
    width: "20px",
    backgroundColor: "#0076ce",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: "6px",
    right: "6px",
  };

  const iconStyles = {
    color: "#222a59",
    fontSize: "36px",
  };

  const textStyles = {
    color: "black",
    margin: "0",
  };

  const [currentItemStyle, setCurrentItemStyle] = useState(itemStyles);

  const cambiarEstiloContraste = () => {
    let nuevoEstiloContraste = "";

    switch (estiloContraste) {
      case "":
        nuevoEstiloContraste = "invertido";
        aplicarEstiloContraste(`filter: invert(1)`);
        break;
      case "invertido":
        nuevoEstiloContraste = "oscuro";
        aplicarEstiloContraste(`
                    background-color: rgb(0, 0, 0) !important;
                    border-color: rgb(255, 255, 255) !important;
                    color: rgb(80, 208, 160) !important;
                `);
        break;
      case "oscuro":
        nuevoEstiloContraste = "claro";
        aplicarEstiloContraste(`
                    background-color: rgb(255, 255, 255) !important;
                    border-color: rgb(0, 0, 0) !important;
                    color: rgb(0, 0, 0) !important;
                `);
        break;
      case "claro":
        nuevoEstiloContraste = "";
        aplicarEstiloContraste("");
        break;
      default:
        nuevoEstiloContraste = "invertido";
        aplicarEstiloContraste("");
    }

    setEstiloContraste(nuevoEstiloContraste);
  };

  const aplicarEstiloContraste = (estilo) => {
    const root = document.documentElement;
    root.style.cssText = estilo;
  };

  useEffect(() => {
    if (reset) {
      setEstiloContraste("");
      aplicarEstiloContraste("");
      setReset(false);
    }
  }, [reset, setReset]);

  return (
    <div
      style={currentItemStyle}
      onClick={cambiarEstiloContraste}
      onMouseEnter={() => setCurrentItemStyle(itemHoverStyles)}
      onMouseLeave={() => setCurrentItemStyle(itemStyles)}
    >
      <div
        style={{ ...innerStyles, display: estiloContraste ? "flex" : "none" }}
      >
        <i className="fa-solid fa-check" style={{ color: "white" }}></i>
      </div>
      <i className="fa-solid fa-brush" style={iconStyles}></i>
      <p style={textStyles}>
        {estiloContraste
          ? estiloContraste.charAt(0).toUpperCase() + estiloContraste.slice(1)
          : "Contraste"}
      </p>
    </div>
  );
};

export default ContrasteComponent;
