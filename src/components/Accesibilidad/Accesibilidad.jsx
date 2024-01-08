import React, { useState, useEffect } from "react";
import FloatComponent from "./FloatComponent";
import styles from "./Accesibilidad.module.css";

const Accesibilidad = () => {
  const [showTable, setShowTable] = useState(false);

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.altKey && event.key === "a") {
        // Activa o desactiva showTable según su estado actual
        setShowTable((prevShowTable) => !prevShowTable);
      }
    };

    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  return (
    <>
      <FloatComponent showTable={showTable} setShowTable={setShowTable} />
      <button
        className={`${styles.floatButton} ${showTable ? styles.showTable : ""}`}
        onClick={() => setShowTable(!showTable)}
      >
        <i className="fa-solid fa-universal-access"></i>
        <span className={styles.tooltip}>Alt + A</span>
      </button>
    </>
  );
};

export default Accesibilidad;
