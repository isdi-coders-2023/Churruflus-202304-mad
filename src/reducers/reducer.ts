import { Simpson } from "../models/simpson";
import { CharacterAction } from "./actions.creator";
import { actionTypes } from "./actons.types";

export type CharactersState = {
  characters: Simpson[];
};

export const characterReducer = (
  state: CharactersState,
  action: CharacterAction
) => {
  let payload: Simpson[] | Simpson | number;
  switch (action.type) {
    case actionTypes.load:
      payload = action.payload as Simpson[];
      return { ...state, characters: payload };

    default:
      return { ...state };
  }
};