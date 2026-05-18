import { useEffect, useState } from "react";
import ButtonComponent from "../ButtonComponent";

const AnimationToggle = ({ reset, setReset, variant }) => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (active) {
      document.body.classList.add("reduce-motion");
    } else {
      document.body.classList.remove("reduce-motion");
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
      text="Reducir animaciones"
      icon="fa-solid fa-circle-stop"
      variant={variant}
    />
  );
};

export default AnimationToggle;
