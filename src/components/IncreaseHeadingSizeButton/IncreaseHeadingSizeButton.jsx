import React, { useState } from "react";

function IncreaseHeadingSizeButton() {
  const [increaseSize, setIncreaseSize] = useState(false);

  const handleClick = () => {
    setIncreaseSize(!increaseSize);
  };

  return (
    <div>
      <button onClick={handleClick}>
        {increaseSize ? "Reducir tamaño" : "Duplicar tamaño"}
      </button>
      <style>
        {`
        
        body h1, h2, h3, h4 {
          font-weight: bold !important;
          font-size: ${increaseSize && "400% !important"} 
      }
  
          
        `}
      </style>
    </div>
  );
}

export default IncreaseHeadingSizeButton;
