import { useContext } from "react";
import { Simpson } from "../../models/simpson";
import { useParams } from "react-router-dom";
import { AppContext } from "../../context/app.context";
import styles from "./Detail.module.scss";

export default function DetailCard() {
  const { id } = useParams();
  const {
    charactersContext: { characters },
  } = useContext(AppContext);

  const item: Simpson = characters.find((item) => item._id === id) as Simpson;

  return (
    <>
      <section>
        <ul className={styles.card_structure}>
          <li>
            <li className={styles.name}>{item.Nombre}</li>
            <img src={item.Imagen} alt={item.Nombre} width={100} height={200} />
          </li>
          <li className={styles.detail}>{item.Genero}</li>
          <li className={styles.detail}>{item.Estado}</li>
          <li className={styles.history}>{item.Historia}</li>
        </ul>
      </section>
    </>
  );
}
