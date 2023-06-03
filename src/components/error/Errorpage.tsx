import styles from "./Error.module.scss";
export default function ErrorPage() {
  return (
    <div className={styles.loaded_route}>
      <img
        className={styles.img_error}
        src="./public/Simpsons-404 1.png"
        alt="Error 404 page not found"
      />
    </div>
  );
}
