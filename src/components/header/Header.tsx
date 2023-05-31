import "./header.module.scss";

type PropsType = {
  children: JSX.Element;
  title: string;
};

export function Header({ children, title }: PropsType) {
  return (
      <header className={styles.header}>
        <h1>{title}</h1>
        <section>
          <img className="hamburger" src="/donut3.png" alt="donut" />
          <div className="line">inicio</div>
          <div className="line">privada</div>
        </section>
      </header>
      {children}
    </>
  );
}
