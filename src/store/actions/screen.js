import { SET_SCREEN } from "../action_types";

export function setScreen(component) {
  return { type: SET_SCREEN, payload: component };
};