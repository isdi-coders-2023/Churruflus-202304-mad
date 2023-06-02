/* eslint-disable @typescript-eslint/no-unused-vars */
import { useCharacters } from "./use.characters";
import { act, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ApiRepository } from "../services/api.repository";
import userEvent from "@testing-library/user-event";

const mockSimpson = {
  Nombre: "Bart Simpson",
};

ApiRepository.prototype.getAll = jest.fn();

(ApiRepository.prototype.getAll as jest.Mock).mockResolvedValue([mockSimpson]);

function TestComponent() {
  const { handleLoad } = useCharacters();

  return (
    <div>
      <button onClick={() => handleLoad()}>load</button>
    </div>
  );
}

describe("Given the hook useCharacters", () => {
  let elements: HTMLElement[];
  beforeEach(async () => {
    await act(async () => {
      render(<TestComponent></TestComponent>);
    });
    elements = screen.getAllByRole("button");
  });
  describe("When you render it", () => {
    test("Then load button should render", async () => {
      await userEvent.click(elements[0]);
      expect(ApiRepository.prototype.getAll).toHaveBeenCalled();
    });
  });
});
