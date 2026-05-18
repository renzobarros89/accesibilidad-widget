import { useEffect, useState } from "react";
import ButtonComponent from "../ButtonComponent";

const DislexiaToggle = ({ reset, setReset, variant }) => {
  const [isDyslexicFont, setDyslexicFont] = useState(false);

  useEffect(() => {
    if (reset) {
      setDyslexicFont(false);
      setReset(false);
    }
  }, [reset, setReset]);

  useEffect(() => {
    const body = document.body;
    if (isDyslexicFont) {
      body.classList.add("dyslexic-font");
    } else {
      body.classList.remove("dyslexic-font");
    }
  }, [isDyslexicFont]);

  return (
    <ButtonComponent
      activate={isDyslexicFont}
      setActivate={setDyslexicFont}
      text="Fuente para dislexia"
      icon="fa-solid fa-font"
      variant={variant}
    />
  );
};

export default DislexiaToggle;
