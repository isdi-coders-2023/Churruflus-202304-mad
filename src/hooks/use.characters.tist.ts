import { useCharacters } from "./use.characters";
import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { ApiRepository } from "../services/api.repository";
import { Simpson } from "../models/simpson";

const mockSimpson: Simpson = {
  Nombre: "Bart Simpson",
} as Simpson;

ApiRepository.prototype.getAll = jest.fn();


(ApiRepository.prototype.getAll as jest.Mock).mockResolvedValue([mockSimpson]);

function TestComponent() {
  const { handleLoad} = useCharacters();

  return (
    <>
      // <h1>Test</h1>
      // <button onClick={() => handleLoad(mockBook)}>Add</button>

    </>
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
  describe("When all is OK", () => {
    test("Then it should ...", async () => {
      await userEvent.click(elements[0]);
      expect(ApiRepository.prototype.create).toHaveBeenCalled();
    });

    test("should ", async () => {
      (ApiRepository.prototype.update as jest.Mock).mockResolvedValueOnce(
        mockBook
      );
      await userEvent.click(elements[1]);
      expect(ApiRepository.prototype.update).toHaveBeenCalled();
    });

  });

  describe("When there ara errors", () => {
    test("should ", async () => {
      (ApiRepository.prototype.create as jest.Mock).mockRejectedValueOnce(
        new Error("")
      );
      await userEvent.click(elements[0]);
      expect(ApiRepository.prototype.create).toHaveBeenCalled();
    });

    test("should ", async () => {
      (ApiRepository.prototype.update as jest.Mock).mockRejectedValueOnce(
        new Error("")
      );
      await userEvent.click(elements[1]);
      expect(ApiRepository.prototype.update).toHaveBeenCalled();
    });

    test("should ", async () => {
      (ApiRepository.prototype.delete as jest.Mock).mockRejectedValueOnce(
        new Error("")
      );
      await userEvent.click(elements[2]);
      expect(ApiRepository.prototype.delete).toHaveBeenCalled();
    });
  });
});
