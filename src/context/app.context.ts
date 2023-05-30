import { createContext } from "react";
import { useCharacters } from "../hooks/use.characters";

export type ContextStructure = {
  charactersContext: ReturnType<typeof useCharacters>;
};

export const AppContext = createContext<ContextStructure>(
  {} as ContextStructure
);
