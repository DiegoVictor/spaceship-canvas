import { SHOOT, MOVE_SHOOTS, RELOAD_SPACESHIP_LASER } from "../action_types";

export function shoot(shoot) {
  return dispatch => {
    dispatch({ type: SHOOT, payload: shoot });
    dispatch({ type: RELOAD_SPACESHIP_LASER });
  };
};

export function moveShoots() {
  return { type: MOVE_SHOOTS };
}