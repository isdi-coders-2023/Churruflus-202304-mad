import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Card } from "./Card";

describe("Given Card component", () => {
  describe("When it is intantiate", () => {
    render(
      <Card
        item={{
          _id: "",
          Nombre: "",
          Historia: "",
          Imagen: "",
          Genero: "",
          Estado: "",
          Ocupacion: "",
        }}
      ></Card>
    );
    test("Then it should be in the document", () => {
      const element = screen.getByRole("img");
      expect(element).toBeInTheDocument();
    });
  });
});
