import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ApiPrivate from "./Api.private";

describe("Given the Api private component", () => {
  describe("When it is instantiate", () => {
    beforeEach(() => {
      render(
        <ApiPrivate>
          <p>Text</p>
        </ApiPrivate>
      );
    });
    test("Then it should render an image in the document", () => {
      const element = screen.getByRole("img");
      expect(element).toBeInTheDocument();
    });

    test('Then it should display "Text" as a child value', () => {
      const element = screen.getByText("Text");
      expect(element).toBeInTheDocument();
    });
  });
});
