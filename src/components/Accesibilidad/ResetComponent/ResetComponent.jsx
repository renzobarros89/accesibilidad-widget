import { useState } from "react";

const ResetComponent = ({ setReset, variant }) => {
  const [isHovered, setIsHovered] = useState(false);

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

  const itemHoverStyles = {
    ...itemStyles,
    backgroundColor: "#f0f0f0",
    boxShadow: "0 0 5px #ffffff",
  };

  const textStyles = {
    color: "white",
    margin: "0",
    transition: "color 0.3s ease-in-out",
  };

  const textHoverStyles = {
    ...textStyles,
    color: "#222a59",
  };

  const [currentItemStyle, setCurrentItemStyle] = useState(itemStyles);
  const [currentTextStyle, setCurrentTextStyle] = useState(textStyles);

  // Variante lista y lista compacta
  if (variant === "list" || variant === "list-compact") {
    const compact = variant === "list-compact";
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: compact ? "9px" : "12px",
          padding: compact ? "7px 12px" : "10px 16px",
          cursor: "pointer",
          backgroundColor: isHovered ? "#fff5f5" : "white",
          borderLeft: "3px solid transparent",
          borderTop: "1px solid #e8eef8",
          userSelect: "none",
          transition: "background-color 0.15s",
        }}
        onClick={() => setReset(true)}
        role="button"
        aria-label="Restablecer todas las herramientas"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          style={{
            width: compact ? "26px" : "32px",
            height: compact ? "26px" : "32px",
            borderRadius: "50%",
            backgroundColor: "#fee2e2",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          <i
            className="fa-solid fa-rotate-left"
            style={{ color: "#dc2626", fontSize: compact ? "11px" : "13px" }}
          />
        </div>
        <span
          style={{
            fontSize: compact ? "13px" : "14px",
            color: "#dc2626",
            fontWeight: "500",
            flex: 1,
          }}
        >
          Restablecer todo
        </span>
      </div>
    );
  }

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
      <p style={currentTextStyle}>Restablecer</p>
    </div>
  );
};

export default ResetComponent;
