import React, { useState } from "react";
import FloatComponent from "./FloatComponent";
import styles from "./FloatComponent.module.css";

const Accesibilidad = () => {
  const [showTable, setShowTable] = useState(false);

  return (
    <>
      {showTable && <FloatComponent setShowTable={setShowTable} />}

      <button
        className={styles.floatButton}
        onClick={() => setShowTable(!showTable)}
      >
        Open
      </button>
    </>
  );
};

export default Accesibilidad;
