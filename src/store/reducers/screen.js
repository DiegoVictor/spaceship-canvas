import { SET_SCREEN, NEW_FRAME } from '../action_types';

const initial_state = {
  current: null,
  timestamp: 0
};

export default (state = initial_state, action) => {
  switch (action.type) {
    case SET_SCREEN:
      return Object.assign({}, state, {
        current: action.payload
      });

    case NEW_FRAME:
      // TODO change from timestamp to another thing or even remove this action
      return Object.assign({}, state, {
        timestamp: new Date().getTime()
      });

    default:
      return state;
  }
}