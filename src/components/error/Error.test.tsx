import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ErrorPage from "./Errorpage";

describe("Given Error component", () => {
  describe("When it is instantiate", () => {
    beforeEach(() => {
      render(<ErrorPage></ErrorPage>);
    });

    test("Then it should be in the document", () => {
      const element = screen.getByRole("img");
      expect(element).toBeInTheDocument();
    });
  });
});
