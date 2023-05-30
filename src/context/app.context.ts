import { createContext } from "react";

export type ContextStructure = {
  sample: string;
};

export const AppContext = createContext<ContextStructure>(
  {} as ContextStructure
);
