
import styles from"./header.module.scss"

export function Header() {
  const title = "The Simpsons API";

  return (
    <>
      <header className={styles.header}>
        <h1>{title}</h1>
      </header>
    </>
  );
}
