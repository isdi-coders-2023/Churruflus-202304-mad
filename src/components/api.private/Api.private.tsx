import styles from "./Api.private.module.scss";

export default function ApiPrivate() {
  return (
    <>
      <div className={styles.private}>
        <p>
          Esta página está en mantenimiento actualmente. Nuestros programadores
          están trabajando duro para que puedas acceder a las opciones de
          usuario. Sentimos las molestias ocasionadas.
        </p>
        <img src="/nerds.png" width="250" height="300" />
      </div>
    </>
  );
}
