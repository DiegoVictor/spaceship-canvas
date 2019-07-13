import { SHOOT, MOVE_SHOOTS, START_RELOAD_SPACESHIP_LASER, REMOVE_ALL_SHOOTS, REMOVE_SHOOT } from "../action_types";

export function shoot(shoot) {
  return dispatch => {
    dispatch({ type: SHOOT, payload: shoot });
    dispatch({ type: START_RELOAD_SPACESHIP_LASER });
  };
};

export function moveShoots() {
  return { type: MOVE_SHOOTS };
}

export function removeAllShoots() {
  return { type: REMOVE_ALL_SHOOTS };
}

export function removeShoot(index) {
  return { type: REMOVE_SHOOT, payload: index };
};