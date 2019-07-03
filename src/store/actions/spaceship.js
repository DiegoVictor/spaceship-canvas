import { MOVE_SPACESHIP, TOGGLE_MOVEMENT_SPEED, RELOAD_SPACESHIP_LASER } from "../action_types";

export function moveSpaceship(key) {
  return { type: MOVE_SPACESHIP, payload: key };
};

export function toggleMovementSpeed() {
  return { type: TOGGLE_MOVEMENT_SPEED };
};

export function reloadSpaceshipLaser() {
  return { type: RELOAD_SPACESHIP_LASER };
}