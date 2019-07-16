import { SHOW_EXPLOSION, UPDATE_EXPLOSIONS, REMOVE_ALL_EXPLOSIONS } from "../action_types";

export function showExplosion(enemy) {
  return { type: SHOW_EXPLOSION, payload: enemy };
};

export function updateExplosions() {
  return { type: UPDATE_EXPLOSIONS };
};

export function removeAllExplosions() {
  return { type: REMOVE_ALL_EXPLOSIONS };
};