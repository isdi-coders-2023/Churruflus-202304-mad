import { useCallback, useEffect, useMemo, useState } from "react";
import { ApiRepository } from "../services/api.repository";
import { ApiResponse, Simpson } from "../models/simpson";

export function useCharacters() {
  const [characters, setCharacters] = useState<Simpson[]>([]);

  const repo: ApiRepository = useMemo(() => new ApiRepository(), []);

  const handleLoad = useCallback(async () => {
    const getCharacters: ApiResponse = await repo.getAll();
    const charactersInfo = getCharacters.docs;
    setCharacters(charactersInfo);
    console.log(charactersInfo);
  }, [repo]);

  useEffect(() => {
    handleLoad();
  }, [handleLoad]);

  return {
    characters,
    handleLoad,
  };
}
