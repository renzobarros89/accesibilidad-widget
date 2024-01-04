import { useEffect, useState } from "react";
import ButtonComponent from "../ButtonComponent";

const DislexiaToggle = () => {
  const [isDyslexicFont, setDyslexicFont] = useState(false);

  useEffect(() => {
    const body = document.body;
    if (isDyslexicFont) {
      body.style.fontFamily = "Open-Dyslexic, sans-serif";
    } else {
      body.style.fontFamily = ""; // Vuelve a la fuente original o elimina esta línea si no es necesario
    }
  }, [isDyslexicFont]);

  return (
    <ButtonComponent
      activate={isDyslexicFont}
      setActivate={setDyslexicFont}
      text="Dislexia"
      icon="fa-solid fa-font"
    />
  );
};

export default DislexiaToggle;
