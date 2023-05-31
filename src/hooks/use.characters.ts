import { useCallback, useEffect, useMemo, useReducer } from "react";
import { ApiRepository } from "../services/api.repository";
import { ApiResponse } from "../models/simpson";
import { CharactersState, characterReducer } from "../reducers/reducer";
import * as actionCreator from "../reducers/actions.creator";
export function useCharacters() {
  const initialState: CharactersState = {
    characters: [],
  };

  const [characterState, dispatch] = useReducer(characterReducer, initialState);
  //const [characters, setCharacters] = useState<Simpson[]>([]);

  const repo: ApiRepository = useMemo(() => new ApiRepository(), []);

  const handleLoad = useCallback(async () => {
    const getCharacters: ApiResponse = await repo.getAll();
    const charactersInfo = getCharacters.docs;
    dispatch(actionCreator.loadCharacterAction(charactersInfo));
  }, [repo]);

  useEffect(() => {
    handleLoad();
  }, [handleLoad]);

  return {
    characters: characterState.characters,
    handleLoad,
  };
}
