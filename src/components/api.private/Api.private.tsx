import styles from "./Api.private.module.scss";

type PropsType = {
  children: JSX.Element;
};

export default function ApiPrivate({ children }: PropsType) {
  return (
    <>
      <div className={styles.private}>
        <p>
          Esta página está en mantenimiento actualmente. Nuestros programadores
          están trabajando duro para que puedas acceder a las opciones de
          usuario. Sentimos las molestias ocasionadas.
        </p>
        <img
          src="/nerds.png"
          width="250"
          height="300"
          alt="three nerd characters"
        />
      </div>
      {children}
    </>
  );
}
