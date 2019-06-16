import { MOVE_SPACESHIP } from "../action_types";

export function moveSpaceship(key) {
  return { type: MOVE_SPACESHIP, payload: key };
};