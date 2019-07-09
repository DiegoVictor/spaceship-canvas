import { TOGGLE_KEY } from '../action_types';


export default (state = {}, action) => {
  switch(action.type) {
    case TOGGLE_KEY:
      return Object.assign({}, state, action.payload);

    default:
      return state;
  }
}

