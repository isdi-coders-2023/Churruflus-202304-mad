import styles from "./Menu.module.scss";
import { useNavigate } from "react-router-dom";
export function Menu() {
  const navigate = useNavigate();

  const handleReturnHome = () => {
    navigate("/");
  };
  const handleReturnPrivate = () => {
    navigate("apiPrivate");
  };
  return (
    <nav className={styles.menu}>
      <ul>
        <li onClick={handleReturnHome}>Inicio</li>
        <span></span>
        <li onClick={handleReturnPrivate}>Privada</li>
      </ul>
    </nav>
  );
}
