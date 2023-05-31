
import styles from "./header.module.scss";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const title = "The Simpsons API";
  const navigate = useNavigate();

  const handleReturnHome = () => {
    navigate("/");
  };

import "./header.module.scss";


type PropsType = {
  children: JSX.Element;
  title: string;
};
export function Header({ children, title }: PropsType) {
  return (
    <>
      <header className={styles.header}>
        <h1>{title}</h1>
        <section>
          <div onClick={handleReturnHome} className="line">
            inicio
          </div>
          <div className="line">privada</div>
        </section>
      </header>
      {children}
    </>
  );
}
