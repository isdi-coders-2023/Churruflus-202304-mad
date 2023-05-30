import { useContext } from "react";
import { AppContext } from "../../context/app.context";

export function List() {
  const {
    charactersContext: { characters },
  } = useContext(AppContext);

  return (
    <ul className="characters">
      {characters.map((item) => (
        <li key={item._id}>
          {item.Nombre}
          <img src={item.Imagen}></img>
        </li>
      ))}
    </ul>
  );
}
