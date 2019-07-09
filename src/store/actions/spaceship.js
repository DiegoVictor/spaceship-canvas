import { setCredits, setMultiplier } from './player';
import { removeAllEnemies } from './enemies';
import { removeAllShoots } from "./shoots";
import { MOVE_SPACESHIP, TOGGLE_MOVEMENT_SPEED, RELOAD_SPACESHIP_LASER, RESET_SPACESHIP } from "../action_types";

export function moveSpaceship(key) {
  return { type: MOVE_SPACESHIP, payload: key };
};

export function toggleMovementSpeed() {
  return { type: TOGGLE_MOVEMENT_SPEED };
};

export function reloadSpaceshipLaser() {
  return { type: RELOAD_SPACESHIP_LASER };
}

export function collided() {
  return dispatch => {
    dispatch(setCredits(-1));
    dispatch(setMultiplier(1));
    dispatch(removeAllEnemies());
    dispatch(removeAllShoots());
  };
};

export function resetSpaceship() {
  return { type: RESET_SPACESHIP };
};