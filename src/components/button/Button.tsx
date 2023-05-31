import "./Button.module.scss";
import styles from "./button.module.scss";
export function Button() {
  return (
    <div className={styles.buttons}>
      <button className={styles.text_button}>Anterior</button>
      <button className={styles.text_button}>Siguiente</button>
    </div>
  );
}
