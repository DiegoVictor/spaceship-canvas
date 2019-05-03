import { SET_SCREEN } from '../action_types';

const initial_state = {
  current: null
};

export default (state = initial_state, action) => {
  switch (action.type) {
    case SET_SCREEN:
      return Object.assign({}, state, {
        current: action.payload
      });

    default:
      return state;
  }
}