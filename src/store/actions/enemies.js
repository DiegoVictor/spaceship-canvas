import { scored } from './player';
import { MOVE_ENEMIES, REMOVE_ALL_ENEMIES, REMOVE_ENEMY } from '../action_types';

export function moveEnemies() {
  return { type: MOVE_ENEMIES };
};

export function removeAllEnemies() {
  return { type: REMOVE_ALL_ENEMIES };
};

export function removeEnemy(index) {
  return { type: REMOVE_ENEMY, payload: index };
};

export function destroyEnemy(enemy, index) {
  return dispatch => {
    dispatch(scored(enemy));
    dispatch(removeEnemy(index));
  };
};