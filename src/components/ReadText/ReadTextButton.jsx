import { useEffect, useState } from "react";

function ReadTextButton({ active, setActive }) {
  console.log(active);
  //const [active, setActive] = useState(false);

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

  function handleClick() {
    setActive(!active);
  }

  return (
    <button onClick={handleClick}>
      {active ? "Desactivar lectura" : "Activar lectura"}
    </button>
  );
}

export default ReadTextButton;
