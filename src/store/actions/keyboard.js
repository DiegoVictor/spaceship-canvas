import { TOGGLE_KEY } from "../action_types";

export function toggleKey(key, value) {
  return { type: TOGGLE_KEY, payload: {[key]: value} };
};