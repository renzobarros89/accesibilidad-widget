import { useEffect, useState } from "react";
import ButtonComponent from "../ButtonComponent";

const FontSizeControl = ({ reset, setReset, variant }) => {
  const [step, setStep] = useState(0); // cada step = +2px base 16px

  const increase = () => {
    if (step >= 5) return;
    const next = step + 1;
    setStep(next);
    document.documentElement.style.fontSize = `${16 + next * 2}px`;
  };

  const decrease = () => {
    if (step <= -3) return;
    const next = step - 1;
    setStep(next);
    if (next === 0) {
      document.documentElement.style.fontSize = "";
    } else {
      document.documentElement.style.fontSize = `${16 + next * 2}px`;
    }
  };

  useEffect(() => {
    if (reset) {
      setStep(0);
      document.documentElement.style.fontSize = "";
      setReset(false);
    }
  }, [reset, setReset]);

  return (
    <>
      <ButtonComponent
        activate={step > 0}
        setActivate={increase}
        text="Aumentar texto"
        icon="fa-solid fa-magnifying-glass-plus"
        variant={variant}
      />
      <ButtonComponent
        activate={step < 0}
        setActivate={decrease}
        text="Disminuir texto"
        icon="fa-solid fa-magnifying-glass-minus"
        variant={variant}
      />
    </>
  );
};

export default FontSizeControl;
