import { useState } from "react";

const ButtonComponent = ({ activate, setActivate, text, icon }) => {
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
    display: activate ? "flex" : "none",
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

  return (
    <div
      style={currentItemStyle}
      onClick={() => setActivate(!activate)}
      onMouseEnter={() => setCurrentItemStyle(itemHoverStyles)}
      onMouseLeave={() => setCurrentItemStyle(itemStyles)}
    >
      <div style={innerStyles}>
        <i className="fa-solid fa-check" style={{ color: "white" }}></i>
      </div>
      <i className={icon} style={iconStyles}></i>
      <p style={textStyles}>{text}</p>
    </div>
  );
};

export default ButtonComponent;
