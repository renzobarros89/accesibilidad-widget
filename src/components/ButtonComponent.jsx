import React from "react";
import styles from "./FloatComponent.module.css";

const ButtonComponent = ({ activate, setActivate, text, icon }) => {
  return (
    <div className={styles.item} onClick={() => setActivate(!activate)}>
      <div
        className={styles.inner}
        style={{ display: activate ? "block" : "none" }}
      >
        <i className="fa-solid fa-check"></i>
      </div>
      <i className={icon}></i>
      <p>{text}</p>
    </div>
  );
};

export default ButtonComponent;
