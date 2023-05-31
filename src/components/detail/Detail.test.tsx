import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { DetailCard } from "./Detail";

describe("Given DetailCard component", () => {
  describe("When it is intantiate", () => {
    render(
      <DetailCard
        item={{
          _id: "",
          Nombre: "",
          Historia: "",
          Imagen: "",
          Genero: "",
          Estado: "",
          Ocupacion: "",
        }}
      ></DetailCard>
    );
    test("Then it should be in the document", () => {
      const element = screen.getByRole("img");
      expect(element).toBeInTheDocument();
    });
  });
});




