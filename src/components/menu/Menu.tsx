import styles from "./Menu.module.scss";
import { Link } from "react-router-dom";
export function Menu() {

  return (
    <nav className={styles.menu}>
      <ul>
        <li>
         <Link to="/">Inicio</Link>
        </li>
        <span></span>
        <li>
           <Link to="apiPrivate">Privada</Link>
        </li>
      </ul>
    </nav>
  );
}
