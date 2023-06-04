import { useCallback, useEffect, useMemo, useReducer, useState } from "react";
import { ApiRepository } from "../services/api.repository";
import { ApiResponse } from "../models/simpson";
import { CharactersState, characterReducer } from "../reducers/reducer";
import * as actionCreator from "../reducers/actions.creator";
export function useCharacters() {
  const query = "?limit=20&page=";
  const initialState: CharactersState = {
    characters: [],
  };

  const [characterState, dispatch] = useReducer(characterReducer, initialState);

  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState("Todos");

  const repo: ApiRepository = useMemo(() => new ApiRepository(), []);

  const handleLoad = useCallback(async () => {
    const getCharacters: ApiResponse = await repo.getAll(query, currentPage);
    const charactersInfo = getCharacters.docs;
    dispatch(actionCreator.loadCharacterAction(charactersInfo));
  }, [currentPage, repo]);

  useEffect(() => {
    handleLoad();
  }, [handleLoad]);

  return {
    characters: characterState.characters,
    currentPage,
    setCurrentPage,
    handleLoad,
    filter,
    setFilter,
  };
}
