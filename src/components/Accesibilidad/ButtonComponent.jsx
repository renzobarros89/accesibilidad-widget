import { useState } from "react";

const ButtonComponent = ({
  activate,
  setActivate,
  text,
  icon,
  isMobile,
  variant = "card",
}) => {
  // Estilos base con condiciones para móvil
  const baseItemStyles = {
    height: isMobile ? "60px" : "70px",
    width: isMobile ? "80px" : "120px",
    margin: isMobile ? "0.2rem" : "0.5rem",
    padding: isMobile ? "0.3rem" : "0.5rem",
    backgroundColor: "#fff",
    textAlign: "center",
    cursor: "pointer",
    borderRadius: "8px",
    position: "relative",
    fontSize: isMobile ? "12px" : "14px",
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
    fontSize: isMobile ? "24px" : "36px",
    marginBottom: "4px",
  };

  const textStyles = {
    color: "black",
    margin: "0",
    fontSize: isMobile ? "12px" : "14px",
    lineHeight: "1.2",
    wordBreak: "break-word",
  };

  const [currentItemStyle, setCurrentItemStyle] = useState(baseItemStyles);
  const [isHovered, setIsHovered] = useState(false);

  // Variante lista normal y compacta (popup)
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
          backgroundColor: activate
            ? "#f0f7ff"
            : isHovered
              ? "#f5f7ff"
              : "white",
          borderLeft: activate ? "3px solid #0076ce" : "3px solid transparent",
          transition: "background-color 0.15s",
          userSelect: "none",
        }}
        onClick={() => setActivate(!activate)}
        role="button"
        aria-pressed={activate}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          style={{
            width: compact ? "26px" : "32px",
            height: compact ? "26px" : "32px",
            borderRadius: "50%",
            backgroundColor: activate ? "#0076ce" : "#e8eef8",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
            transition: "background-color 0.15s",
          }}
        >
          <i
            className={icon}
            style={{
              color: activate ? "white" : "#222a59",
              fontSize: compact ? "11px" : "13px",
            }}
          />
        </div>
        <span
          style={{
            fontSize: compact ? "13px" : "14px",
            color: "#222a59",
            fontWeight: activate ? "600" : "400",
            flex: 1,
            lineHeight: "1.3",
          }}
        >
          {text}
        </span>
        {activate && (
          <i
            className="fa-solid fa-check"
            style={{ color: "#0076ce", fontSize: "11px", flexShrink: 0 }}
          />
        )}
      </div>
    );
  }

  // Variante tarjeta (default)
  return (
    <div
      style={currentItemStyle}
      onClick={() => setActivate(!activate)}
      onMouseEnter={() => setCurrentItemStyle(itemHoverStyles)}
      onMouseLeave={() => setCurrentItemStyle(baseItemStyles)}
      aria-pressed={activate}
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
