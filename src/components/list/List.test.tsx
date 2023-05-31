import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import {List} from "./List"
import { Simpson } from "../../models/simpson";
import { ContextStructure, AppContext } from "../../context/app.context";


describe("Given List component", () => {
  describe("When it is intantiate", () => {
    const simpson = [
      {Nombre: "Bart Simpson", Estado: "Vivo"},
      {Nombre: "Hommer Simpson", Estado: "Muerto"}
    ] as Simpson [];

    const value: ContextStructure = {
      AppContext: {
        simpson,
      },
    } as unknown as ContextStructure;


 render(
   <AppContext.Provider value={value}>
     <List></List>
   </AppContext.Provider>
 );

 test("Then it should contain an <li> element", () => {
      const element = screen.getByRole("list");
      expect(element).toBeInTheDocument();
    });
  });
});


