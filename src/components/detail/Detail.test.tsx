import { render, screen } from "@testing-library/react";
import DetailCard from "./Detail";
import { AppContext, ContextStructure } from "../../context/app.context";
import { MemoryRouter as Router } from "react-router-dom";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: jest.fn().mockReturnValue({ id: "1" }),
}));

const sampleCharacters: ContextStructure = {
  charactersContext: {
    characters: [
      {
        _id: "1",
        Nombre: "Homer Simpson",
        Imagen: "homer.jpg",
        Genero: "Masculino",
        Estado: "Vivo",
        Historia: "Homer es el padre de la familia Simpson...",
        Ocupacion: "Empleado central nuclear",
      },
    ],
  },
} as ContextStructure;
describe("Given character detail", () => {
  describe("when", () => {
    test("Show character details on the screen from context", () => {
   render(
        <Router initialEntries={["/detail/1"]}>
          <AppContext.Provider value={sampleCharacters}>
            <DetailCard />
          </AppContext.Provider>
        </Router>
      );
      const characterDetails = screen.getByText("Homer Simpson");
      expect(characterDetails).toBeInTheDocument ;
    });
  });
});
