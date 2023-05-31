import { Simpson } from "../models/simpson";
import { CharacterAction } from "./actions.creator";
import { actionTypes } from "./actions.types";
import { CharactersState, characterReducer } from "./reducer";

describe("Given a characterReducer", () => {
  describe("When it is instantiated", () => {
    test("Then it should return an initial state []", () => {
      const initialState: CharactersState = { characters: [] };
      const action: CharacterAction = { type: "", payload: [] };
      const finalState: CharactersState = { characters: [] };

      const result = characterReducer(initialState, action);

      expect(result).toEqual(finalState);
    });

    test('Then it should execute "load" action type correctly', () => {
      const initialState: CharactersState = { characters: [] };
      const mockCharacters: Simpson[] = [
        {
          _id: "2",
          Nombre: "3",
          Imagen: "wer",
          Historia: "dfs",
          Genero: "dfgd",
          Estado: "dfg",
          Ocupacion: "f",
        },
      ];
      const mockAction: CharacterAction = {
        type: actionTypes.load,
        payload: mockCharacters,
      };

      const result = characterReducer(initialState, mockAction);

      expect(result).toEqual({ characters: mockCharacters });
    });
  });
});
