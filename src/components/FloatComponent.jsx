import React from "react";
import styles from "./FloatComponent.module.css";

const FloatComponent = ({ setShowTable }) => {
  return (
    <div className={styles.floatComponent}>
      <div className={styles.titulo}>
        <p>Menú de Accesibilidad - Secretaría de Modernización</p>
        <button
          className={styles.closeButton}
          onClick={() => setShowTable(false)}
        >
          X
        </button>
      </div>
      <div className={styles.itemContainer}>
        <div className={styles.item} onClick={() => setShowTable(false)}>
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
  );
};

export default FloatComponent;
