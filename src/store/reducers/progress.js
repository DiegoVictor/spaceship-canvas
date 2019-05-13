import { ADVANCE_PROGRESS } from '../action_types';

const initial_state = {
  processed: 0
};

export default (state = initial_state, action) => {
  switch(action.type) {
    case ADVANCE_PROGRESS:
      /* Update the progress bar percent */
      return Object.assign({}, state, {
        processed: state.processed + 1
      });

    default:
      return state;
  }
}