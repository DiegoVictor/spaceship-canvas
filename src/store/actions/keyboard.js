import { TOGGLE_KEY, CLEAR_ALL_PRESSED_KEYS } from "../action_types";

export function toggleKey(key, value) {
  return { type: TOGGLE_KEY, payload: {[key]: value} };
};

export function clearPressedKeys() {
  return { type: CLEAR_ALL_PRESSED_KEYS };
}