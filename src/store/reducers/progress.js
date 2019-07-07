import { ADVANCE_PROGRESS } from '../action_types';

export default (state = 0, action) => {
  switch(action.type) {
    case ADVANCE_PROGRESS:
      /* Update the progress bar percent */
      return state + 1;

    default:
      return state;
  }
}