import { Simpson } from "../models/simpson";
import { CharacterAction } from "./actions.creator";
import { actionTypes } from "./actions.types";

export type CharactersState = {
  characters: Simpson[];
};

export const characterReducer = (
  state: CharactersState,
  action: CharacterAction
) => {
  let payload: Simpson[] | Simpson | number | string;
  switch (action.type) {
    case actionTypes.load:
      payload = action.payload as Simpson[];
      return { ...state, characters: payload };

    default:
      return { ...state };
  }
};
