import { useState } from "react";

const ButtonComponent = ({
  activate,
  setActivate,
  text,
  icon,
  responsiveStyles,
}) => {
  const baseItemStyles = {
    height: responsiveStyles?.itemCard?.height || "70px",
    width: responsiveStyles?.itemCard?.width || "120px",
    margin: responsiveStyles?.itemCard?.margin || "1rem",
    padding: responsiveStyles?.itemCard?.padding || "0.5rem",
    backgroundColor: "#fff",
    textAlign: "center",
    cursor: "pointer",
    borderRadius: "8px",
    position: "relative",
    fontSize: responsiveStyles?.itemCard?.fontSize || "14px",
    border: "solid transparent 2px",
    transition: "all 0.3s ease-in-out",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  };

  const itemHoverStyles = {
    ...baseItemStyles,
    border: "solid 2px #222a59",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
  };

  const innerStyles = {
    borderRadius: "50%",
    height: "16px",
    width: "16px",
    backgroundColor: "#0076ce",
    display: activate ? "flex" : "none",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: "4px",
    right: "4px",
  };

  const iconStyles = {
    color: "#222a59",
    fontSize: responsiveStyles?.itemIcon?.fontSize || "36px",
    marginBottom: "4px",
  };

  const textStyles = {
    color: "black",
    margin: "0",
    fontSize: responsiveStyles?.itemCard?.fontSize || "14px",
    lineHeight: "1.2",
    wordBreak: "break-word",
  };

  const [currentItemStyle, setCurrentItemStyle] = useState(baseItemStyles);

  return (
    <div
      style={currentItemStyle}
      onClick={() => setActivate(!activate)}
      onMouseEnter={() => setCurrentItemStyle(itemHoverStyles)}
      onMouseLeave={() => setCurrentItemStyle(baseItemStyles)}
    >
      <div style={innerStyles}>
        <i
          className="fa-solid fa-check"
          style={{ color: "white", fontSize: "10px" }}
        ></i>
      </div>
      <i className={icon} style={iconStyles}></i>
      <p style={textStyles}>{text}</p>
    </div>
  );
};

export default ButtonComponent;
