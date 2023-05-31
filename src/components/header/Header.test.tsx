import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Header } from "./Header";
import { Menu } from "../menu/Menu";
describe("Given Header component", () => {
  describe("When it is instantiate", () => {
    const title = "Los Simpsons API";
    beforeEach(() => {
      render(
        <Header title={title}>
          <Menu></Menu>
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
  });
});
