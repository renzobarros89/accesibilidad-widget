import React, { useState, useEffect } from "react";
import FloatComponent from "./FloatComponent";
import styles from "./Accesibilidad.module.css";
import imgAccesibilidad from "./assets/img/accesibilidad.png";

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
                className={`${styles.accesibilidadFloatButton} ${
                    showTable ? styles.showTable : ""
                }`}
                onClick={() => setShowTable(!showTable)}
            >
                <img
                    src={imgAccesibilidad}
                    alt="Accesibilidad"
                    className={styles.accesibilidadImage}
                />
                <span className={styles.accesibilidadTooltip}>Alt + A</span>
            </button>
        </>
    );
};

export default Accesibilidad;
