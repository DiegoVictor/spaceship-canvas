import { SHOOT, MOVE_SHOOTS, START_RELOAD_SPACESHIP_LASER } from "../action_types";

export function shoot(shoot) {
  return dispatch => {
    dispatch({ type: SHOOT, payload: shoot });
    dispatch({ type: START_RELOAD_SPACESHIP_LASER });
  };
};

export function moveShoots() {
  return { type: MOVE_SHOOTS };
}