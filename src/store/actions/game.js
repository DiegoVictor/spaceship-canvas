import { resetPlayer } from './player';
import { resetSpaceship } from './spaceship';
import { removeAllEnemies } from './enemies';
import { SET_STATUS } from "../action_types";
import { removeAllShoots } from "./shoots";

export function restart() {
  return dispatch => {
    dispatch(resetSpaceship());
    dispatch(resetPlayer());
    dispatch(removeAllEnemies());
    dispatch(removeAllShoots());
  }
};

export function setStatus(status) {
  return { type: SET_STATUS, payload: status };
}