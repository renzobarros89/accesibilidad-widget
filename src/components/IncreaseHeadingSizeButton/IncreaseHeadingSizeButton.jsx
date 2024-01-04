import { useState } from "react";
import ButtonComponent from "../ButtonComponent";

function IncreaseHeadingSizeButton() {
  const [increaseSize, setIncreaseSize] = useState(false);

  return (
    <>
      <ButtonComponent
        activate={increaseSize}
        setActivate={setIncreaseSize}
        text="Duplicar tamaño"
        icon="fa-solid fa-text-height"
      />
      <style>
        {`
        body h1, h2, h3, h4 {
          font-weight: bold !important;
          font-size: ${increaseSize && "400% !important"} 
          }
        `}
      </style>
    </>
  );
}

export default IncreaseHeadingSizeButton;
