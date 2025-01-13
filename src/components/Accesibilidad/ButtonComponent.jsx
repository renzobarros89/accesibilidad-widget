import styles from "./FloatComponent.module.css";

const ButtonComponent = ({ activate, setActivate, text, icon }) => {
    return (
        <div
            className={styles.itemAccesibilidad}
            onClick={() => setActivate(!activate)}
        >
            <div
                className={styles.innerAccesibilidad}
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
