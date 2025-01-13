import styles from "../FloatComponent.module.css";

const ResetComponent = ({ setReset }) => {
    return (
        <div
            className={styles.itemResetAccesibilidad}
            onClick={() => setReset(true)}
        >
            <p>Restablecer</p>
        </div>
    );
};
export default ResetComponent;
