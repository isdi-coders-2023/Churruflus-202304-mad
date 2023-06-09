import { Simpson } from "../models/simpson";
import { actionTypes } from "./actions.types";

export type CharacterAction = {
  type: string;
  payload: Simpson[] | string;
};

export function loadCharacterAction(payload: Simpson[]): CharacterAction {
  return {
    type: actionTypes.load,
    payload,
  };
}
