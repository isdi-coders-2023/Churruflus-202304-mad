import styles from "./header.module.scss";
import { useNavigate } from "react-router-dom";
import "./header.module.scss";

type PropsType = {
  children: JSX.Element;
  title: string;
};
export function Header({ children, title }: PropsType) {
  const navigate = useNavigate();

  const handleReturnHome = () => {
    navigate("/");
  };
  return (
    <>
      <header className={styles.header}>
        <h1 className={styles.h1}>{title}</h1>
        <section>
          <div onClick={handleReturnHome} className="line">
            Inicio
          </div>
          <div className="line">Privada</div>
        </section>
      </header>
      {children}
    </>
  );
}
