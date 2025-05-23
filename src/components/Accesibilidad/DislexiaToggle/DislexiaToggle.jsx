import { useEffect, useState } from "react";
import ButtonComponent from "../ButtonComponent";

const DislexiaToggle = ({ reset, setReset }) => {
  const [isDyslexicFont, setDyslexicFont] = useState(false);

  useEffect(() => {
    if (reset) {
      setDyslexicFont(false);
      setReset(false);
    }
  }, [reset]);

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
      text="Dislexia"
      icon="fa-solid fa-font"
    />
  );
};

export default DislexiaToggle;
