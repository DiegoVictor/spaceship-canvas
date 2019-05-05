import { SET_SCREEN, NEW_FRAME } from "../action_types";

export function setScreen(component) {
  return { type: SET_SCREEN, payload: component };
};

export function newFrame() {
  return { type: NEW_FRAME };
}