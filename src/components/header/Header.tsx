
import styles from "./header.module.scss";

export default function Header() {
  const title = "The Simpsons API";

import "./header.module.scss";


type PropsType = {
  children: JSX.Element;
  title: string;
};
export function Header({ children, title }: PropsType) {
  return (
    <>
      <header className="header">
        <h1 className="title">{title}</h1>
        <img src="/donut3.png" alt="donut" />
      </header>
      {children}
    </>
  );
}
