import { HEIGHT, WIDTH } from '../../globals';
import { MOVE_ENEMIES, REMOVE_ALL_ENEMIES, REMOVE_ENEMY } from '../action_types';
import { rotate } from '../../utils';

const initial_state = [];

export default (state = initial_state, action) => {
  let enemies;
  switch(action.type) {
    case MOVE_ENEMIES:
      enemies = Object.assign([], state);

      for(let i in enemies) {
        let enemy = enemies[i];

        switch(enemy.type) {
          case 'ufo':
            if (enemy.paths.length > 0) {
              let now = new Date().getTime();
              let path = enemy.paths[0];

              if (enemy.x + enemy.width > WIDTH) {
                enemies.splice(i--, 1);
                continue;
              }

              if (enemy.x < -enemy.width) {
                enemies.splice(i--, 1);
                continue;
              }

              if (typeof path.step !== 'object') {
                path.step = {};
              }

              for(let field of ['x', 'y']) {
                if (typeof path.step[field] !== 'number') {
                  path.step[field] = (path[field] - enemy[field]) / path.miliseconds;
                }

                enemy[field] += (now - enemy.miliseconds) * path.step[field];

                if (path.step[field] > 0) {
                  if (enemy[field] > path[field]) {
                    enemy[field] = path[field];
                  }
                }
                else {
                  if (enemy[field] < path[field]) {
                    enemy[field] = path[field];
                  }
                }
              }
              enemy.miliseconds = now;

              if (enemy.x === path.x && enemy.y === path.y) {
                enemy.paths.shift();
              }
            }
            break;

          case 'meteor':
          default:
            if (typeof enemy.step === 'number') {
              enemy.y += enemy.step;
              if (enemy.y > HEIGHT) {
                enemies.splice(i--, 1);
                continue;
              }

              enemy.rotation += rotate(enemy.step);
            }
            break;
        }
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