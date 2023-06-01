import { useContext } from "react";
import "./Button.module.scss";
import styles from "./button.module.scss";
import { AppContext } from "../../context/app.context";
export function Button() {
  const {
    charactersContext: { currentPage, setCurrentPage },
  } = useContext(AppContext);

  return (
    <div className={styles.buttons}>
      <button
        className={styles.text_button}
        onClick={() => {
          currentPage > 0 ? setCurrentPage(currentPage - 1) : 0;
        }}
      >
        Anterior
      </button>
      <button
        className={styles.text_button}
        onClick={() => {
          currentPage < 127 ? setCurrentPage(currentPage + 1) : 0;
        }}
      >
        Siguiente
      </button>
    </div>
  );
}
