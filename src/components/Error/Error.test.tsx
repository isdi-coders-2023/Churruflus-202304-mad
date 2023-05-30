import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Error } from "./Errorpage";
describe("Given Error component", () => {
  describe("When it is instantiate", () => {
    beforeEach(() => {
      render(<Error></Error>);
    });

    test("Then it should be in the document", () => {
      const element = screen.getByRole("img");
      expect(element).toBeInTheDocument();
    });
  })
});
