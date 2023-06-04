import { useContext } from "react";
import styles from "./PagingButtons.module.scss";
import { AppContext } from "../../context/app.context";
export function PagingButtons() {
  const {
    charactersContext: { currentPage, setCurrentPage },
  } = useContext(AppContext);

  return (
    <div className={styles.paging}>
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
