import styles from "../FloatComponent.module.css";

const ResetComponent = ({ setReset }) => {
  return (
    <div className={styles.itemReset} onClick={() => setReset(true)}>
      <p>Restablecer configuraciones</p>
    </div>
  );
};
export default ResetComponent;
