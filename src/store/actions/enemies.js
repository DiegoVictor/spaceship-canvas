import { MOVE_ENEMIES, REMOVE_ALL_ENEMIES } from '../action_types';

export function moveEnemies() {
  return { type: MOVE_ENEMIES };
};

export function removeAllEnemies() {
  return { type: REMOVE_ALL_ENEMIES };
};