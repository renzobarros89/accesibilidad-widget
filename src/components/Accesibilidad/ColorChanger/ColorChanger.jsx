import { useEffect, useState } from "react";
import ButtonComponent from "../ButtonComponent";

const ColorChanger = ({ reset, setReset }) => {
  const [currentColorIndex, setCurrentColorIndex] = useState(0);
  const colors = ["", "blue", "red", "green", "orange", "white", "black"];

  const applyColorToElements = (color) => {
    setTimeout(() => {
      const elements = document.querySelectorAll("h1, h2, h3, p, button, a");
      elements.forEach((element) => {
        element.style.color = color || "";
      });
    }, 50);
  };

  const handleColorChange = () => {
    const nextColorIndex = (currentColorIndex + 1) % colors.length;
    setCurrentColorIndex(nextColorIndex);
    applyColorToElements(colors[nextColorIndex]);
  };

  useEffect(() => {
    if (reset) {
      setCurrentColorIndex(0);
      applyColorToElements("");
      setReset(false);
    }
  }, [reset, setReset]);

  return (
    <ButtonComponent
      activate={currentColorIndex !== 0}
      setActivate={handleColorChange}
      text="Color fuente"
      icon="fa-solid fa-palette"
    />
  );
};

export default ColorChanger;
