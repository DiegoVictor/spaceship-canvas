import { SHOW_EXPLOSION, UPDATE_EXPLOSIONS, REMOVE_ALL_EXPLOSIONS } from '../action_types';

const initial_state = [];

export default (state = initial_state, action) => {
  let explosions;
  switch (action.type) {
    case SHOW_EXPLOSION:
      explosions = Object.assign([], state);
      explosions.push({
        height: 8,
        rotation: 0,
        status: 'increasing',
        step: 1,
        x: action.payload.x + action.payload.width / 2,
        y: action.payload.y + action.payload.height / 2,
        width: 8
      });
      return explosions;

    case REMOVE_ALL_EXPLOSIONS:
      return [];

    case UPDATE_EXPLOSIONS:
      explosions = Object.assign([], state);
      for(let i in explosions) {
        let explosion = explosions[i];

        explosion.rotation += Math.PI / 180 * 3;
        switch (explosion.status) {
          case 'increasing':
            explosion.height += explosion.step;
            explosion.width += explosion.step;

            if (explosion.height > 18) {
              explosion.status = 'burning';
              explosion.energy = 40;
            }
            break;

          case 'burning':
            explosion.energy--;
            if (explosion.energy === 0) {
              explosion.status = 'decreasing';
            }
            break;

          default:
          case 'decreasing':
            explosion.height -= explosion.step;
            explosion.width -= explosion.step;
            if (explosion.height < 2) {
              explosions.splice(i--, 1);
            }
            break;
        }
      }
      return explosions;

    default:
      return state;
  }
}