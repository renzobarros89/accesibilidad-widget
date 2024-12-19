import { useEffect, useState } from "react";
import styles from "../FloatComponent.module.css";

const ContrasteComponent = ({ reset, setReset }) => {
    const [estiloContraste, setEstiloContraste] = useState("");

    const cambiarEstiloContraste = () => {
        let nuevoEstiloContraste = "";

        switch (estiloContraste) {
            case "":
                nuevoEstiloContraste = "invertido";
                aplicarEstiloContraste(`filter: invert(1)`);
                break;
            case "invertido":
                nuevoEstiloContraste = "oscuro";
                aplicarEstiloContraste(`
          background-color: rgb(0, 0, 0) !important;
          border-color: rgb(255, 255, 255) !important;
          color: rgb(80, 208, 160) !important;
        `);
                break;
            case "oscuro":
                nuevoEstiloContraste = "claro";
                aplicarEstiloContraste(`
          background-color: rgb(255, 255, 255) !important;
          border-color: rgb(0, 0, 0) !important;
          color: rgb(0, 0, 0) !important;
        `);
                break;
            case "claro":
                nuevoEstiloContraste = "";
                aplicarEstiloContraste("");
                break;
            default:
                nuevoEstiloContraste = "invertido";
                aplicarEstiloContraste("");
        }

        // Actualizar el estado después de aplicar el estilo
        setEstiloContraste(nuevoEstiloContraste);
    };

    useEffect(() => {
        if (reset) {
            // Restablecer el estado a su valor inicial
            setEstiloContraste("");
            aplicarEstiloContraste("");
            setReset(false);
        }
    }, [reset, setReset]);

    const aplicarEstiloContraste = (estilo) => {
        const root = document.documentElement;
        root.style.cssText = estilo;
    };

    return (
        <>
            <div
                className={styles.itemAccesibilidad}
                onClick={cambiarEstiloContraste}
            >
                <div
                    className={styles.innerAccesibilidad}
                    style={{ display: estiloContraste ? "block" : "none" }}
                >
                    <i className="fa-solid fa-check"></i>
                </div>
                <i className="fa-solid fa-brush"></i>
                <p>
                    {estiloContraste
                        ? estiloContraste.charAt(0).toUpperCase() +
                          estiloContraste.slice(1)
                        : "Contraste"}
                </p>
            </div>
        </>
    );
};

export default ContrasteComponent;
