import { useState, useEffect } from "react";
import ButtonComponent from "../ButtonComponent";

const ReadingGuide = ({ reset, setReset }) => {
    const [guideLine, setGuideLine] = useState(false);
    const [guideLinePosition, setGuideLinePosition] = useState(null);

    const handleMouseMove = (e) => {
        if (guideLine) {
            setGuideLinePosition(e.clientY);
        }
    };

    useEffect(() => {
        if (reset) {
            setGuideLine(false);
            setReset(false);
        }
    }, [reset]);

    useEffect(() => {
        if (guideLine) {
            window.addEventListener("mousemove", handleMouseMove);
        } else {
            setGuideLine(false);
            window.removeEventListener("mousemove", handleMouseMove);
        }
    }, [guideLine]);

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
            />
            <div style={guideLineStyles}></div>
        </>
    );
};

export default ReadingGuide;
