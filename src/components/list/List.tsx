import { useContext } from "react";
import { AppContext } from "../../context/app.context";
import styles from "./List.module.scss";
import { Card } from "../card/Card";
import { PagingButtons } from "../button/PagingButtons";

export default function List() {
  const {
    charactersContext: { characters },
  } = useContext(AppContext);

  return (
    <>
      <PagingButtons></PagingButtons>
      <ul className={styles.characters}>
        {characters.map((item) => (
          <Card item={item} key={item._id}></Card>
        ))}
      </ul>
    </>
  );
}
