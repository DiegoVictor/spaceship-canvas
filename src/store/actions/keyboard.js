import { TOGGLE_KEY } from "../action_types";

export function toggleKey(key) {
  return { type: TOGGLE_KEY, payload: key };
};