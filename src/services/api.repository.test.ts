import { Simpson } from "../models/simpson";
import { ApiRepository } from "./api.repository";

describe("Given the class ApiRepository", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  const repo = new ApiRepository();
  const mockSimpson = [
    { Nombre: "Bart Simpson", Estado: "Vivo" },
  ] as unknown as Simpson;
  global.fetch = jest.fn().mockResolvedValue({
    json: () => Promise.resolve(mockSimpson),
    ok: true,
  });
  describe("When it is instantiated implements SimpsonRepo", () => {
    test("then it should returns", async () => {
      const get = await repo.getAll("Hola", 2);
      expect(get).toEqual(mockSimpson);
    });
  });

  describe("Given the class ApiRepository", () => {
    describe("When it is instantiated implements SimpsonRepo", () => {
      const repo = new ApiRepository();
      global.fetch = jest.fn().mockResolvedValue({
        json: () => Promise.resolve(),
        ok: false,
        status: 400,
      });
      test("then it should returns", async () => {
        const get = await repo.getAll("Hola", 2);
        expect(get).toHaveProperty("status", 400);
      });
    });
  });
});
