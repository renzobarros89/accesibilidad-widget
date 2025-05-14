import { useEffect, useState } from "react";
import ButtonComponent from "../ButtonComponent";

function ReadTextButton({ reset, setReset }) {
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (reset) {
      setActive(false);
      setReset(false);
    }
  }, [reset]);

  useEffect(() => {
    const speech = window.speechSynthesis;

    if (active) {
      const handleClick = (event) => {
        readText(speech, event.target);
      };

      document.addEventListener("click", handleClick);

      return () => {
        document.removeEventListener("click", handleClick);
      };
    }
  }, [active]);

  function readText(speech, target) {
    const text = target.textContent;
    const utterance = new SpeechSynthesisUtterance(text);
    speech.speak(utterance);
  }

  return (
    <ButtonComponent
      activate={active}
      setActivate={setActive}
      text="Texto a voz"
      icon="fa-solid fa-volume-high"
    />
  );
}

export default ReadTextButton;
