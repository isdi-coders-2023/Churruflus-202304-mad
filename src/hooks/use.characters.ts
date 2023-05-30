import { useCallback, useEffect, useMemo, useState } from "react";
import { ApiRepository } from "../services/api.repository";
import { Simpson } from "../models/simpson";

export function useCharacters() {
  const [characters, setCharacters] = useState<Simpson[]>([]);
  const charactersUrl = "https://apisimpsons.fly.dev/api/personajes";

  const repo: ApiRepository<Simpson> = useMemo(
    () => new ApiRepository<Simpson>(charactersUrl),
    []
  );

  const handleLoad = useCallback(async () => {
    const loadedCharacters = await repo.getAll();
    setCharacters(loadedCharacters);
  }, [repo]);

  useEffect(() => {
    handleLoad();
  }, [handleLoad]);

  return {
    characters,
    handleLoad,
  };
}
