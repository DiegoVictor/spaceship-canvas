import { MOVE_BACKGROUND, SET_BACKGROUND } from '../action_types';

const initial_state = {
  y: 0,
  img: null
};

export default (state = initial_state, action) => {
  switch (action.type) {
    case MOVE_BACKGROUND:
      /* Move the background */
      if (state.img !== null) {
        if (state.y + action.payload > state.img.height) {
          return Object.assign({}, state, { y: 0 });
        }

        return Object.assign({}, state, {
          y: state.y + 1
        });
      }
      return state;

    case SET_BACKGROUND:
      return Object.assign({}, state, { img: action.payload });

    default:
      return state;
  }
}