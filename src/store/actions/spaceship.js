import { MOVE_SPACESHIP, TOGGLE_MOVEMENT_SPEED } from "../action_types";

export function moveSpaceship(key) {
  return { type: MOVE_SPACESHIP, payload: key };
};

export function toggleMovementSpeed() {
  return { type: TOGGLE_MOVEMENT_SPEED };
};