import { useEffect, useState } from "react";
import ButtonComponent from "../ButtonComponent";

function HighlightLinksAndButtonsButton({ reset, setReset }) {
  const [highlight, setHighlight] = useState(false);

  useEffect(() => {
    if (reset) {
      setHighlight(false);
      setReset(false);
    }
  }, [reset]);

  useEffect(() => {
    // Seleccionar tanto enlaces como botones
    const elementsToHighlight = document.querySelectorAll("a, button");

    elementsToHighlight.forEach((element) => {
      element.classList.toggle("highlighted", highlight);
    });
  }, [highlight]);

  return (
    <>
      <ButtonComponent
        activate={highlight}
        setActivate={setHighlight}
        text="Resaltar enlaces"
        icon="fa-solid fa-hashtag"
      />
      <style>
        {`
          .highlighted {
            background-color: yellow; /* Color de fondo para botones resaltados */
            text-decoration: underline; /* Subrayado para enlaces resaltados */
            color: black; /* Color del texto para enlaces resaltados */
          }
        `}
      </style>
    </>
  );
}

export default HighlightLinksAndButtonsButton;
