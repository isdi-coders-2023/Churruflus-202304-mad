import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Header } from "./Header";
describe("Given Header component", () => {
  describe("When it is instantiate", () => {
    const title = "Los Simpsons API";
    beforeEach(() => {
      render(
        <Header title={title}>
          <p>Test</p>
        </Header>
      );
    });

    test("Then it should be in the document", () => {
      const element = screen.getByRole("heading");
      expect(element).toBeInTheDocument();
    });
    test("it should display props values", () => {
      const elementTitle = screen.getByText(title);
      expect(elementTitle).toBeInTheDocument();
    });
    test("it should display child values", () => {
      const elementTitle = screen.getByText("Test");
      expect(elementTitle).toBeInTheDocument();
    });
  });
});
