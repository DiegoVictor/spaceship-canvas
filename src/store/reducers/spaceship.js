import { MOVE_SPACESHIP, TOGGLE_MOVEMENT_SPEED } from '../action_types';

const initial_state = {
  x: 175,
  y: 512,
  step: 3
};

export default (state = initial_state, action) => {
  switch(action.type) {
    case MOVE_SPACESHIP:
      let step = state.step;

      switch(action.payload) {
        case 'Up':
          step *= -1;

        case 'Down':
          return Object.assign({}, state, {
            y: state.y + step
          });
        
        case 'Left':
          step *= -1;

        case 'Right':
          return Object.assign({}, state, {
            x: state.x + step
          });
      }
      return state;

    case TOGGLE_MOVEMENT_SPEED:
      return Object.assign({}, state, {
        step: state.step > 1 ? 1 : 3
      });

    default:
      return state;
  }
}