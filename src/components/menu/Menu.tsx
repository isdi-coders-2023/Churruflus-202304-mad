import styles from "./Menu.module.scss";
import { Link } from "react-router-dom";
export function Menu() {
  return (
    <nav className={styles.menu}>
      <ul>
        <li>
          <Link className={styles.menu} to={"/"}>
            Personajes
          </Link>
        </li>
        <span></span>
        <li>
          <Link className={styles.menu} to="apiPrivate">
            Privada
          </Link>
        </li>
      </ul>
    </nav>
  );
}
