import { useState, useEffect, useCallback } from "react";
import ButtonComponent from "../ButtonComponent";

const ReadingGuide = ({ reset, setReset, variant }) => {
  const [guideLine, setGuideLine] = useState(false);
  const [guideLinePosition, setGuideLinePosition] = useState(0);

  const handleMouseMove = useCallback((e) => {
    setGuideLinePosition(e.clientY);
  }, []);

  useEffect(() => {
    if (reset) {
      setGuideLine(false);
      setReset(false);
    }
  }, [reset, setReset]);

  useEffect(() => {
    if (guideLine) {
      window.addEventListener("mousemove", handleMouseMove);
    } else {
      window.removeEventListener("mousemove", handleMouseMove);
    }
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [guideLine, handleMouseMove]);

  const guideLineStyles = guideLine
    ? {
        boxSizing: "border-box",
        background: "#0d6efd",
        width: "100vw",
        position: "fixed",
        height: "2px",
        border: "solid 3px #0d6efd",
        borderRadius: "5px",
        top: `${guideLinePosition}px`,
        left: 0,
        zIndex: "2147483647",
        pointerEvents: "none",
      }
    : {
        display: "none",
      };

  return (
    <>
      <ButtonComponent
        activate={guideLine}
        setActivate={setGuideLine}
        text="Línea de guia"
        icon="fa-solid fa-underline"
        variant={variant}
      />
      <div style={guideLineStyles}></div>
    </>
  );
};

export default ReadingGuide;
