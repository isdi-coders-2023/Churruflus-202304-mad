import { render, screen } from "@testing-library/react";
import List from "./List";
import { Simpson } from "../../models/simpson";
import { ContextStructure, AppContext } from "../../context/app.context";
import { MemoryRouter as Router } from "react-router-dom";

describe("List component", () => {
  describe("when instantiated", () => {
    const characters = [
      { _id: "1", Nombre: "Bart Simpson", Estado: "Vivo" },
      { _id: "2", Nombre: "Frank Grimes", Estado: "Fallecido" },
      { _id: "3", Nombre: "Homer Simpson", Estado: "Vivo" },
    ] as Simpson[];

    const value: ContextStructure = {
      charactersContext: {
        characters,
        setFilter: jest.fn(),
        filter: "Todos",
      },
    } as unknown as ContextStructure;

    beforeEach(() => {
      render(
        <Router>
          <AppContext.Provider value={value}>
            <List />
          </AppContext.Provider>
        </Router>
      );
    });

    test("should render the character names", () => {
      const bartElement = screen.getByText("Bart Simpson");
      expect(bartElement).toBeInTheDocument();
    });
  });
});
