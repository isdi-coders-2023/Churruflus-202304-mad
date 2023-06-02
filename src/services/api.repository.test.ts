import { ApiResponse, Simpson } from "../models/simpson";
import { ApiRepository } from "./api.repository";

describe("Given an ApiRepository", () => {
  describe("When it calls to the method getAll", () => {
    test("Then it should fetch data from the API and return the response", async () => {
      const query = "";
      const currentPage = 1;
      const expectedUrl = `https://apisimpsons.fly.dev/api/personajes/${query}${currentPage}`;
      const mockCharacters: Simpson[] = [
        {
          _id: "1",
          Nombre: "Homer Simpson",
          Historia: "Padre",
          Imagen: "homer.jpg",
          Genero: "Masculino",
          Estado: "Vivo",
          Ocupacion: "Vago",
        },
      ];

      const mockResponse: ApiResponse = {
        docs: mockCharacters,
      };

      global.fetch = jest.fn().mockResolvedValue({
        ok: true,
        json: jest.fn().mockResolvedValue(mockResponse),
      });

      const apiRepository = new ApiRepository();
      const response = await apiRepository.getAll(query, currentPage);

      expect(global.fetch).toHaveBeenCalledWith(expectedUrl);
      expect(response).toEqual(mockResponse);
    });

    test("Then it should throw an error if the fetch is not successful", async () => {
      const query = "someQuery";
      const currentPage = 1;
      const expectedUrl = `https://apisimpsons.fly.dev/api/personajes/${query}${currentPage}`;
      const mockErrorMessage = "Error";

      global.fetch = jest.fn().mockResolvedValue({
        ok: false,
        status: 400,
        statusText: "Error",
      });

      const apiRepository = new ApiRepository();

      expect(apiRepository.getAll(query, currentPage)).rejects.toThrow(
        mockErrorMessage
      );

      expect(global.fetch).toHaveBeenCalledWith(expectedUrl);
    });
  });
});
