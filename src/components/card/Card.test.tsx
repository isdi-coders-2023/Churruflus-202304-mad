import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Card } from "./Card";
import { Simpson } from "../../models/simpson";
import { MemoryRouter as Router } from "react-router-dom";

describe("Given Card component", () => {
  describe("When it is intantiate", () => {
    beforeEach(() => {
      render(
        <Router>
          <Card item={{ Nombre: "Homer Simpson" } as Simpson}></Card>
        </Router>
      );
    });

    test("Then it should be in the document", () => {
      const element = screen.getByRole("listitem");
      expect(element).toBeInTheDocument();
    });
  });
});
