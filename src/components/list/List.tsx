import { useContext } from "react";
import { AppContext } from "../../context/app.context";
import styles from "./list.module.scss"

export function List() {
  const {
    charactersContext: { characters },
  } = useContext(AppContext);

  return (
    <ul className={styles.characters}>
      {characters.map((item) => (
        <li key={item._id}>
          {item.Nombre}
          <img src={item.Imagen} width='150' height='260'></img>
        </li>
      ))}
    </ul>
  );
}
