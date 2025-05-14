import { useState } from "react";

const ResetComponent = ({ setReset }) => {
  // Estilos base
  const itemStyles = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "150px",
    height: "45px",
    backgroundColor: "#0076ce",
    cursor: "pointer",
    borderRadius: "8px",
    fontSize: "14px",
    border: "solid transparent 2px",
    transition: "all 0.3s ease-in-out",
    marginLeft: "1rem",
  };

  // Estilos para hover
  const itemHoverStyles = {
    ...itemStyles,
    backgroundColor: "#f0f0f0",
    boxShadow: "0 0 5px #ffffff",
  };

  // Estilos para el texto
  const textStyles = {
    color: "white",
    margin: "0",
    transition: "color 0.3s ease-in-out",
  };

  const textHoverStyles = {
    ...textStyles,
    color: "#222a59",
  };

  // Estados para manejar hover
  const [currentItemStyle, setCurrentItemStyle] = useState(itemStyles);
  const [currentTextStyle, setCurrentTextStyle] = useState(textStyles);

  return (
    <div
      style={currentItemStyle}
      onClick={() => setReset(true)}
      onMouseEnter={() => {
        setCurrentItemStyle(itemHoverStyles);
        setCurrentTextStyle(textHoverStyles);
      }}
      onMouseLeave={() => {
        setCurrentItemStyle(itemStyles);
        setCurrentTextStyle(textStyles);
      }}
    >
      <p style={currentTextStyle}>Restablecer -</p>
    </div>
  );
};

export default ResetComponent;
