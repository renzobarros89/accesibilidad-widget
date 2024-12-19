import styles from "./FloatComponent.module.css";
import ReadTextButton from "./ReadText/ReadTextButton";
import HighlightLinksButton from "./HighlightLinksButton/HighlightLinksButton";
import IncreaseHeadingSizeButton from "./IncreaseHeadingSizeButton/IncreaseHeadingSizeButton";
import ReadingGuide from "./ReadingGuide/ReadingGuide";
import ColorChanger from "./ColorChanger/ColorChanger";
import DislexiaToggle from "./DislexiaToggle/DislexiaToggle";
import ContrasteComponent from "./ContrasteComponent/ContrasteComponent";
import DaltonismoComponent from "./DaltonismoComponent/DaltonismoComponent";
import logoSecretaria from "./assets/img/modernizacion_blanco.png";
import ResetComponent from "./ResetComponent/ResetComponent";
import { useState } from "react";

const componentList = [
    ReadTextButton,
    HighlightLinksButton,
    IncreaseHeadingSizeButton,
    ReadingGuide,
    ColorChanger,
    DislexiaToggle,
    ContrasteComponent,
    DaltonismoComponent,
];

const FloatComponent = ({ showTable, setShowTable }) => {
    const [reset, setReset] = useState(false);

    return (
        <>
            <div
                className={styles.floatComponentAccesibilidad}
                style={{ display: showTable ? "block" : "none" }}
            >
                <div className={styles.headerAccesibilidad}>
                    <img src={logoSecretaria} />
                    <div className={styles.columnAccesibilidad}>
                        <ResetComponent setReset={setReset} />
                        <button
                            className={styles.closeButtonAccesibilidad}
                            onClick={() => setShowTable(false)}
                        >
                            <i className="fa-solid fa-xmark"></i>
                        </button>
                    </div>
                </div>
                <div className={styles.contenedorAccesibilidad}>
                    {componentList.map((Component, index) => (
                        <Component
                            key={index}
                            reset={reset}
                            setReset={setReset}
                        />
                    ))}
                </div>
            </div>
        </>
    );
};

export default FloatComponent;
