import { Simpson } from "../models/simpson";
import { ApiRepository } from "./api.repository";


describe("Given the class ApiRepository", () => {
  const repo = new ApiRepository();
  const mockSimpson = [{Nombre: "Bart Simpson", Estado: "Vivo"}] as unknown as Simpson
  global.fetch = jest.fn().mockResolvedValue({
    json;
  })
})
