import { useEffect, useState } from "react";
import styles from "../FloatComponent.module.css";

const ColorChanger = ({ reset, setReset }) => {
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

  useEffect(() => {
    if (reset) {
      setCurrentColorIndex(0);
      applyColorToElements(colors[0]);
      setReset(false);
    }
  }, [reset]);

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
        <p>Color fuente</p>
      </div>
    </>
  );
};

export default ColorChanger;
