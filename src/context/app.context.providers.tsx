import { AppContext } from "./app.context";

export function AppContextProvider({ children }: { children: JSX.Element }) {
  const value = {
    sample: "Prueba",
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
