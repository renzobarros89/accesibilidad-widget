import { useEffect, useState } from "react";

const ColorChanger = ({ reset, setReset }) => {
  const [currentColorIndex, setCurrentColorIndex] = useState(0);
  const colors = ["", "blue", "red", "green", "orange", "white", "black"];

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

  const handleColorChange = () => {
    const nextColorIndex = (currentColorIndex + 1) % colors.length;
    setCurrentColorIndex(nextColorIndex);
    applyColorToElements(colors[nextColorIndex]);
  };

  const applyColorToElements = (color) => {
    const elements = document.querySelectorAll("h1, h2, h3, p, button, a");
    elements.forEach((element) => {
      element.style.color = color;
    });
  };

  useEffect(() => {
    if (reset) {
      setCurrentColorIndex(0);
      applyColorToElements(colors[0]);
      setReset(false);
    }
  }, [reset]);

  return (
    <div
      style={currentItemStyle}
      onClick={handleColorChange}
      onMouseEnter={() => setCurrentItemStyle(itemHoverStyles)}
      onMouseLeave={() => setCurrentItemStyle(itemStyles)}
    >
      <div
        style={{
          ...innerStyles,
          display: currentColorIndex !== 0 ? "flex" : "none",
        }}
      >
        <i className="fa-solid fa-check" style={{ color: "white" }}></i>
      </div>
      <i className="fa-solid fa-palette" style={iconStyles}></i>
      <p style={textStyles}>Color fuente</p>
    </div>
  );
};

export default ColorChanger;
