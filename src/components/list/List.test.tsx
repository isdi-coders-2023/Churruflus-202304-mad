import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import List from "./List";
import { Simpson } from "../../models/simpson";
import { ContextStructure, AppContext } from "../../context/app.context";
import { MemoryRouter as Router } from "react-router-dom";

describe("Given List component", () => {
  describe("When it is intantiate", () => {
    const characters = [
      { Nombre: "Bart Simpson", Estado: "Vivo" },
    ] as Simpson[];

    const value: ContextStructure = {
      charactersContext: {
        characters,
      },
    } as unknown as ContextStructure;

    render(
      <Router>
        <AppContext.Provider value={value}>
          <List></List>
        </AppContext.Provider>
      </Router>
    );

    test("Then it should contain in property 'Nombre' value 'Bart Simpson'", () => {
      const element = screen.getByText("Bart Simpson");
      expect(element).toBeInTheDocument();
    });
  });
});
