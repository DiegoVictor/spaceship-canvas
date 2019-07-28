import { TOGGLE_KEY, CLEAR_ALL_PRESSED_KEYS } from '../action_types';

const initial_state = {
  p: false
};

export default (state = initial_state, action) => {
  switch(action.type) {
    case TOGGLE_KEY:
      return Object.assign({}, state, action.payload);

      case CLEAR_ALL_PRESSED_KEYS:
        let keyboard = Object.assign({}, state);
        for(let i in keyboard) {
          keyboard[i] = false;
        }
        return keyboard;

    default:
      return state;
  }
}

