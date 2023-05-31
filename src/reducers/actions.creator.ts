import { Simpson } from "../models/simpson";
import { actionTypes } from "./actons.types";

export type CharacterAction = {
  type: keyof typeof actionTypes;
  payload: Simpson[];
};

export function loadCharacterAction(payload: Simpson[]): CharacterAction {
  return {
    type: actionTypes.load as keyof typeof actionTypes,
    payload,
  };
}
