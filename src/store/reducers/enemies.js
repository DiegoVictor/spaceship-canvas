import { MOVE_ENEMIES } from '../action_types';
const initial_state = [];

export default (state = initial_state, action) => {
  switch(action.type) {
    case MOVE_ENEMIES:
      let enemies = Object.assign([], state);
      enemies = enemies.map(enemy => {
        enemy.y += enemy.step;
        enemy.rotation += Math.PI / 180 * enemy.step;
        return enemy;
      });
      return enemies;

    default:
      return state;
  }
}