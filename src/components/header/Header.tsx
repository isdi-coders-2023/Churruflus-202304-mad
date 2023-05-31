import styles from "./header.module.scss";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const title = "The Simpsons API";
  const navigate = useNavigate();

  const handleReturnHome = () => {
    navigate("/");
  };

  return (
    <>
      <header className={styles.header}>
        <h1>{title}</h1>
        <section>
          <img className="hamburger" src="/donut3.png" alt="donut" />
          <div onClick={handleReturnHome} className="line">
            inicio
          </div>
          <div className="line">privada</div>
        </section>
      </header>
    </>
  );
}
