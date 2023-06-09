import { Link } from "react-router-dom";
import { Simpson } from "../../models/simpson";
import styles from "./Card.module.scss";

type PropsType = {
  item: Simpson;
};
export function Card({ item }: PropsType) {
  return (
    <Link to={"/details/" + item._id} className={styles.name}>
      <li key={item._id}>
        <img
          src={item.Imagen}
          alt={item.Nombre}
          width="140"
          height="250"
          className={styles.image}
        />
        <p className={styles.name_box}> {item.Nombre}</p>
      </li>
    </Link>
  );
}
