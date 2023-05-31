import { useContext } from "react";
import { Simpson } from "../../models/simpson";
import { useParams } from "react-router-dom";
import { AppContext } from "../../context/app.context";

export default function DetailCard() {
  const { id } = useParams();
  const {
    charactersContext: { characters },
  } = useContext(AppContext);

  const item: Simpson = characters.find((item) => item._id === id) as Simpson;

  return (
    <>
      <section>
        <ul className="card-structure">
          <li>
            <img src={item.Imagen} alt={item.Nombre} />
          </li>
          <li>{item.Nombre}</li>
          <li>{item.Genero}</li>
          <li>{item.Estado}</li>
          <li>{item.Historia}</li>
        </ul>
      </section>
    </>
  );
}
