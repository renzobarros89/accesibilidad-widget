import React, { useState } from "react";
import styles from "./FloatComponent.module.css";
import ReadTextButton from "./ReadText/ReadTextButton";
import HighlightLinksButton from "./HighlightLinksButton/HighlightLinksButton";
import IncreaseHeadingSizeButton from "./IncreaseHeadingSizeButton/IncreaseHeadingSizeButton";
import ReadingGuide from "./ReadingGuide/ReadingGuide";

const FloatComponent = ({ showTable, setShowTable }) => {
  return (
    <>
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
          <ReadTextButton />
          <HighlightLinksButton />
          <IncreaseHeadingSizeButton />
          <ReadingGuide />
          <div className={styles.item}>
            <i className="fas fa-eye"></i>
          </div>
          <div className={styles.item}>
            <i className="fas fa-globe"></i>
          </div>
          <div className={styles.item}>
            <i className="fa-solid fa-hashtag"></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default FloatComponent;
