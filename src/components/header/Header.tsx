import styles from "./header.module.css";

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
