import { useEffect, useState } from "react";
import ButtonComponent from "../ButtonComponent";

// Implementa WCAG 2.1 SC 1.4.12 - Text Spacing
const TextSpacingButton = ({ reset, setReset, variant }) => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (active) {
      root.style.letterSpacing = "0.1em";
      root.style.wordSpacing = "0.16em";
      root.style.lineHeight = "1.8";
    } else {
      root.style.letterSpacing = "";
      root.style.wordSpacing = "";
      root.style.lineHeight = "";
    }
  }, [active]);

  useEffect(() => {
    if (reset) {
      setActive(false);
      setReset(false);
    }
  }, [reset, setReset]);

  return (
    <ButtonComponent
      activate={active}
      setActivate={setActive}
      text="Espaciado de texto"
      icon="fa-solid fa-arrows-left-right"
      variant={variant}
    />
  );
};

export default TextSpacingButton;
