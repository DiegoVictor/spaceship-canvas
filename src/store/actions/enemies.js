import { scored } from './player';
import { showExplosion } from "./explosions";
import { dropItem } from "./items";
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

export function dropEnemyItens(enemy) {
  return dispatch => {
    enemy.drop.forEach(item => {
      dispatch(dropItem(
        enemy.x, enemy.y, item.value,
        Math.floor(Math.random() * item.amount)
      ));
    });
  }
};

export function destroyEnemy(enemy, index) {
  return dispatch => {
    dispatch(scored(enemy));
    dispatch(removeEnemy(index));
    dispatch(showExplosion(enemy));
    dispatch(dropEnemyItens(enemy));
  };
};