import styles from "./Menu.module.scss";
export function Menu() {
  return (
    <nav className={styles.menu}>
      <ul>
        <li>Inicio</li>
        <span></span>
        <li>Privada</li>
      </ul>
    </nav>
  );
}
