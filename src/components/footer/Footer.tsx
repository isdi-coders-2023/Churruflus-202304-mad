import styles from "./Footer.module.scss";
export function Footer() {
  return (
    <footer className={styles.footer}>
      <address className={styles.text}>Los Churruflus © 2023</address>
    </footer>
  );
}
