import { SET_STATUS } from "../action_types";

// TODO move game's status to root status
const initial_state = {
  status: 'booting'
};

export default function(state = initial_state, action) {
  switch (action.type) {
    case SET_STATUS:
      return Object.assign({}, state, {
        status: action.payload
      });

    default:
      return state;
  }
}