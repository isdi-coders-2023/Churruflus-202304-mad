import styles from "./Menu.module.scss";
import { useNavigate } from "react-router-dom";
export function Menu() {
  const navigate = useNavigate();

  const handleReturnHome = () => {
    navigate("/");
  };
  return (
    <nav className={styles.menu}>
      <ul>
        <li onClick={handleReturnHome}>Inicio</li>
        <span></span>
        <li>Privada</li>
      </ul>
    </nav>
  );
}
