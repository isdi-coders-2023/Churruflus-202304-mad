import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Footer from "./footer";

describe("Given Footer component", () => {
  describe("When it is instantiated", () => {
    test('Then it should render on screen "CHURRUFLUS" ', () => {
      render(<Footer />);
      const text = screen.getByRole("contentinfo");
      expect(text).toBeInTheDocument();
    });
  });
});
