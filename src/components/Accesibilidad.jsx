import React, { useState } from "react";
import FloatComponent from "./FloatComponent";
import styles from "./Accesibilidad.module.css";

const Accesibilidad = () => {
  const [showTable, setShowTable] = useState(false);

  return (
    <>
      <FloatComponent showTable={showTable} setShowTable={setShowTable} />
      <button
        className={styles.floatButton}
        onClick={() => setShowTable(!showTable)}
      >
        <i className="fa-solid fa-universal-access"></i>
      </button>
    </>
  );
};

export default Accesibilidad;
