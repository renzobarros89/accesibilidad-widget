import React, { useState } from "react";
import styles from "./FloatComponent.module.css";
import ReadTextButton from "./ReadText/ReadTextButton";

const FloatComponent = ({ showTable, setShowTable }) => {
  const [readText, setReadText] = useState(false);

  return (
    <>
      <ReadTextButton active={readText} setActive={setReadText} />
      <div
        className={styles.floatComponent}
        style={{ display: showTable ? "block" : "none" }}
      >
        <div className={styles.titulo}>
          <p>Menú de Accesibilidad - Secretaría de Modernización</p>
          <button
            className={styles.closeButton}
            onClick={() => setShowTable(false)}
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>
        <div className={styles.itemContainer}>
          <div className={styles.item} onClick={() => setReadText(!readText)}>
            <div
              className={styles.inner}
              style={{ display: readText ? "block" : "none" }}
            >
              <i className="fa-solid fa-check"></i>
            </div>
            <i className="fa-solid fa-volume-high"></i>
            <p>Texto a voz</p>
          </div>
          <div className={styles.item}>
            <i className="fa-solid fa-crosshairs"></i>
          </div>
          <div className={styles.item}>
            <i className="fas fa-chart-bar"></i>
          </div>
          <div className={styles.item}>
            <i className="fas fa-eye"></i>
          </div>
          <div className={styles.item}>
            <i className="fas fa-globe"></i>
          </div>
          <div className={styles.item}></div>
          <div className={styles.item}></div>
        </div>
      </div>
    </>
  );
};

export default FloatComponent;
