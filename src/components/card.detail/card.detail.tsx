import { Simpson } from "../../models/simpson";

type PropsType = {
  item: Simpson;
};
export const Card = ({ item }: PropsType) => {
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
};