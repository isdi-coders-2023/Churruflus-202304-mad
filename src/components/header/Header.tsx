import styles from "./header.module.scss";

export function Header() {
  const title = "The Simpsons API";

  return (
    <>
      <header className={styles.header}>
        <h1>{title}</h1>
        <section>
          <img className="hamburger" src="/donut3.png" alt="donut" />
          <div className="line">inicio</div>
          <div className="line">privada</div>
        </section>
      </header>
    </>
  );
}
