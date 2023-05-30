import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Header } from "./Header";
describe("Given Header component", () => {
  describe("When it is instantiate", () => {
    beforeEach(() => {
      render(<Header></Header>);
    });

    test("Then it should be in the document", () => {
      const element = screen.getByRole("heading");
      expect(element).toBeInTheDocument();
    });
  });
});










