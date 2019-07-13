import { MOVE_ENEMIES, REMOVE_ALL_ENEMIES, REMOVE_ENEMY } from '../action_types';

const initial_state = [];

export default (state = initial_state, action) => {
  let enemies;
  switch(action.type) {
    case MOVE_ENEMIES:
      enemies = Object.assign([], state);
      enemies = enemies.map(enemy => {
        enemy.y += enemy.step;
        enemy.rotation += Math.PI / 180 * enemy.step;
        return enemy;
      });
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