import { useEffect, useState } from "react";
import ButtonComponent from "../ButtonComponent";

function IncreaseHeadingSizeButton({ reset, setReset, variant }) {
  const [increaseSize, setIncreaseSize] = useState(false);

  useEffect(() => {
    if (reset) {
      setIncreaseSize(false);
      setReset(false);
    }
  }, [reset, setReset]);

  return (
    <>
      <ButtonComponent
        activate={increaseSize}
        setActivate={setIncreaseSize}
        text="Tamaño fuente"
        icon="fa-solid fa-text-height"
        variant={variant}
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
