import { resetPlayer } from './player';
import { resetSpaceship } from './spaceship';
import { removeAllEnemies } from './enemies';
import { removeAllShoots } from "./shoots";

export function restart() {
  return dispatch => {
    dispatch(resetSpaceship());
    dispatch(resetPlayer());
    dispatch(removeAllEnemies());
    dispatch(removeAllShoots());
  }
};
