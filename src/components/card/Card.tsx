import { Link } from "react-router-dom";
import { Simpson } from "../../models/simpson";
import styles from "./Card.module.scss";

type PropsType = {
  item: Simpson;
};
export const Card = ({ item }: PropsType) => {
  return (
    <Link to={"/details/" + item._id} className={styles.name}>
      <ul className={styles.card_structure}>
        <li>
          <img src={item.Imagen} alt={item.Nombre} width="170" height="330" />
        </li>
        <li className={styles.name_box}> {item.Nombre}</li>
      </ul>
    </Link>
  );
};
