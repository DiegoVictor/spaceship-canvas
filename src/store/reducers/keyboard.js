import { TOGGLE_KEY } from '../action_types';


export default (state = {}, action) => {
  switch(action.type) {
    case TOGGLE_KEY:
      let value = true;

      if (typeof state[action.payload] === 'boolean') {
        value = !state[action.payload];
      }

      return Object.assign({}, state, {
        [action.payload]: value
      });

    default:
      return state;
  }
}

