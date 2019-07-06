import { SHOOT, MOVE_SHOOTS } from '../action_types';

const initial_state = [];

export default (state = initial_state, action) => {
  switch(action.type) {
    case SHOOT:
      return Object.assign([], state, (shoots => {
          shoots.push(action.payload);
          return shoots;
        })(Object.assign([], state))
      );

    case MOVE_SHOOTS:
      return Object.assign([], state,
        (shoots => {
          for(let i in shoots) {
            if (shoots[i].y > -shoots[i].step) {
              shoots[i].y -= shoots[i].step;
            }
            else {
              delete shoots[i--];
            }
          }
          return shoots;
        })(Object.assign([], state))
      );

    default:
      return state;
  }
}