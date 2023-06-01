import { useCharacters } from "./use.characters";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ApiRepository } from "../services/api.repository";
import { AppContextProvider } from "../context/app.context.providers";


const mockSimpson = {
  Nombre: "Bart Simpson",
}
// } as Book;

ApiRepository.prototype.getAll = jest.fn();
// ApiRepository.prototype.create = jest.fn();
// ApiRepository.prototype.update = jest.fn();
// ApiRepository.prototype.delete = jest.fn();

(ApiRepository.prototype.getAll as jest.Mock).mockResolvedValue([mockSimpson]);

// const mockSimpson = {
//   getAll: jest
//     .fn()
//     .mockReturnValue(Promise.resolve([{ Nombre: "Bart Simpson" }])),
// } as unknown as ApiRepository;

describe("Given the TestComponente", () => {
  beforeEach(() => {
    function TestComponent() {
      const { handleLoad } = useCharacters();

      return (
        <div>
          <button onClick={() => handleLoad()}>load</button>
        </div>
      );
    }
    render(
      <AppContextProvider>
        <TestComponent></TestComponent>
      </AppContextProvider>
    );
  });
  describe("When you render it", () => {
    test("Then load button should render", () => {
      const btn = screen.getByRole("button");
      expect(btn).toBeInTheDocument();
    });
  });
});
