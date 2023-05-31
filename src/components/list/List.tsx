import { useContext } from "react";
import { AppContext } from "../../context/app.context";
import styles from "./list.module.scss";
import { Card } from "../card/Card";

export function List() {
  const {
    charactersContext: { characters },
  } = useContext(AppContext);

  return (
    <ul className={styles.characters}>
      {characters.map((item) => (
        <Card item={item} key={item._id}></Card>
      ))}
    </ul>
  );
}
