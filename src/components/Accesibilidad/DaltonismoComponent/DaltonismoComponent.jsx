import { useEffect, useState } from "react";

const DaltonismoComponent = ({ reset, setReset }) => {
  const [tiposDaltonismo, setTiposDaltonismo] = useState([
    "",
    "protanopia",
    "deuteranopia",
    "tritanopia",
    "monocromo",
  ]);
  const [indiceTipoDaltonismo, setIndiceTipoDaltonismo] = useState(0);

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
      default:
        root.style.cssText = `filter: none;`;
    }
  };

  useEffect(() => {
    if (reset) {
      setIndiceTipoDaltonismo(0);
      aplicarEstiloDaltonismo("");
      setReset(false);
    }
  }, [reset, setReset]);

  return (
    <div
      style={currentItemStyle}
      onClick={cambiarTipoDaltonismo}
      onMouseEnter={() => setCurrentItemStyle(itemHoverStyles)}
      onMouseLeave={() => setCurrentItemStyle(itemStyles)}
    >
      <div
        style={{
          ...innerStyles,
          display: indiceTipoDaltonismo !== 0 ? "flex" : "none",
        }}
      >
        <i className="fa-solid fa-check" style={{ color: "white" }}></i>
      </div>
      <i className="fas fa-eye" style={iconStyles}></i>
      <p style={textStyles}>
        {tiposDaltonismo[indiceTipoDaltonismo] || "Daltonismo"}
      </p>
    </div>
  );
};

export default DaltonismoComponent;
