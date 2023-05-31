import { Link } from "react-router-dom";
import { Simpson } from "../../models/simpson";

type PropsType = {
  item: Simpson;
};
export const Card = ({ item }: PropsType) => {
  return (
    <li>
      <Link to={"/details/" + item._id}>
        <section>
          <ul className="card-structure">
            <li>
              <img src={item.Imagen} alt={item.Nombre} />
            </li>
            <li>{item.Nombre}</li>
          </ul>
        </section>
      </Link>
    </li>
  );
};
