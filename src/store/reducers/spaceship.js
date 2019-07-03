import { MOVE_SPACESHIP, TOGGLE_MOVEMENT_SPEED, RELOAD_SPACESHIP_LASER } from '../action_types';
import { HEIGHT, WIDTH, SPACESHIP_HEIGHT } from '../../globals';

const initial_state = {
  x: 175,
  y: 512,
  step: 3,

  /* Cycles between every spaceship's shoot */
  cadence: {
    remmaning: 0,
    value: 10
  }
};

export default (state = initial_state, action) => {
  switch(action.type) {
    case MOVE_SPACESHIP:
      let new_state = {};
      // Move spaceship and prevent it to move to outside of the screen
      switch(action.payload) {
        case 'Up':
          new_state.y = state.y - state.step;
          if (new_state.y < 0) {
            new_state.y = 0;
          }
          break;

        case 'Down':
          new_state.y = state.y + state.step;
          if (new_state.y > HEIGHT - SPACESHIP_HEIGHT) {
            new_state.y = HEIGHT - SPACESHIP_HEIGHT;
          }
          break;
        
        case 'Left':
          new_state.x = state.x - state.step;
          if (new_state.x < 0) {
            new_state.x = 0;
          }
          break;

        case 'Right':
          new_state.x = state.x + state.step;
          if (new_state.x > WIDTH) {
            new_state.x = WIDTH;
          }
          break;
          
        default:
          return state;
      }

      return Object.assign({}, state, new_state);

    case TOGGLE_MOVEMENT_SPEED:
      return Object.assign({}, state, {
        step: state.step > 1 ? 1 : 3
      });

    case RELOAD_SPACESHIP_LASER:
      if (state.cadence.remmaning > 0) {
        return Object.assign({}, state, {
          ...state,
          cadence: {
            ...state.cadence,
            remmaning: state.cadence.remmaning - 1
          }
        });
      }

      return Object.assign({}, state, {
        ...state,
        cadence: {
          ...state.cadence,
          remmaning: state.cadence.value
        }
      });

    default:
      return state;
  }
}