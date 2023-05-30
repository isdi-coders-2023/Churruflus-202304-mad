import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Error } from "./Errorpage";
describe("Given Error component", () => {
  describe("When it is instantiate", () => {
    beforeEach(() => {
      render(<Error></Error>);
    });

    test("Then it should be in the document", () => {
      const element = screen.getByText("Error 404 hdp");
      expect(element).toBeInTheDocument();
    });
  });test("Then it should be in the document", () => {
    const element = screen.getByRole("heading")
    expect(element).toBeInTheDocument()
  })
});
