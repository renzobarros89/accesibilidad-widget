import { useState } from "react";
import styles from "../FloatComponent.module.css";

const ColorChanger = () => {
  const [currentColorIndex, setCurrentColorIndex] = useState(0);
  const colors = ["", "blue", "red", "green", "orange", "white", "black"];

  const handleColorChange = () => {
    const nextColorIndex = (currentColorIndex + 1) % colors.length;
    setCurrentColorIndex(nextColorIndex);
    applyColorToElements(colors[nextColorIndex]);
  };

  const applyColorToElements = (color) => {
    // Aplicar el color a todos los elementos deseados
    const elements = document.querySelectorAll("h1, h2, h3, p, button, a");
    elements.forEach((element) => {
      element.style.color = color;
    });
  };

  return (
    <>
      <div className={styles.item} onClick={handleColorChange}>
        <div
          className={styles.inner}
          style={{ display: currentColorIndex !== 0 ? "block" : "none" }}
        >
          <i className="fa-solid fa-check"></i>
        </div>
        <i className="fa-solid fa-palette"></i>
        <p>Cambiar color</p>
      </div>
    </>
  );
};

export default ColorChanger;
