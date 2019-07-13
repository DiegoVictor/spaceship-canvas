import { HEIGHT } from '../../globals';
import { MOVE_ENEMIES, REMOVE_ALL_ENEMIES, REMOVE_ENEMY } from '../action_types';

const initial_state = [];

export default (state = initial_state, action) => {
  let enemies;
  switch(action.type) {
    case MOVE_ENEMIES:
      enemies = Object.assign([], state);

      for(let i in enemies) {
        enemies[i].y += enemies[i].step;
        if (enemies[i].y > HEIGHT) {
          enemies.splice(i--, 1);
          continue;
        }
        enemies[i].rotation += Math.PI / 180 * enemies[i].step;
      }
      return enemies;
    
    case REMOVE_ALL_ENEMIES:
      return [];

    case REMOVE_ENEMY:
      enemies = Object.assign([], state);
      enemies.splice(action.payload, 1);
      return enemies;

    default:
      return state;
  }
}