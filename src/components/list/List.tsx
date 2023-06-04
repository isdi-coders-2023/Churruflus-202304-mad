import { useContext } from "react";
import { AppContext } from "../../context/app.context";
import styles from "./List.module.scss";
import { Card } from "../card/Card";
import { PagingButtons } from "../button/PagingButtons";

export default function List() {
  const {
    charactersContext: { characters, filter, setFilter },
  } = useContext(AppContext);

  let filteredCharacters;
  switch (filter) {
    case "Vivo":
      filteredCharacters = characters.filter((item) => item.Estado === "Vivo");
      break;
    case "Fallecido":
      filteredCharacters = characters.filter(
        (item) => item.Estado === "Fallecido"
      );
      break;
    default:
      filteredCharacters = characters;
  }

  return (
    <>
      <PagingButtons></PagingButtons>
      <button onClick={() => setFilter("Todos")}>Mostrar Todos</button>
      <button onClick={() => setFilter("Vivo")}>Mostrar Vivos</button>
      <button onClick={() => setFilter("Fallecido")}>Mostrar Fallecidos</button>
      <ul className={styles.characters}>
        {filteredCharacters.map((item) => (
          <Card item={item} key={item._id} data-testid="card"></Card>
        ))}
      </ul>
    </>
  );
}
