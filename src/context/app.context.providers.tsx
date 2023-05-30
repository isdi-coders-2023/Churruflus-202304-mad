import { useCharacters } from "../hooks/use.characters";
import { AppContext } from "./app.context";

export function AppContextProvider({ children }: { children: JSX.Element }) {
  const value = {
    charactersContext: useCharacters(),
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
