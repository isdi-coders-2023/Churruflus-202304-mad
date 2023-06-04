import styles from "./Header.module.scss";

type PropsType = {
  children: JSX.Element;
  title: string;
};
export function Header({ children, title }: PropsType) {
  return (
    <>
      <header className={styles.header}>
        <h1>{title}</h1>
      </header>
      {children}
    </>
  );
}
