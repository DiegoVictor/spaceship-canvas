import { SHOOT, MOVE_SHOOTS, REMOVE_ALL_SHOOTS, REMOVE_SHOOT } from '../action_types';

const initial_state = [];

export default (state = initial_state, action) => {
  let shoots;
  switch(action.type) {
    case SHOOT:
      shoots = Object.assign([], state);
      shoots.push(action.payload);
      return shoots;

    case MOVE_SHOOTS:
      shoots = Object.assign([], state);
      for(let i in shoots) {
        if (shoots[i].y > -shoots[i].step) {
          shoots[i].y -= shoots[i].step;
        }
        else {
          delete shoots[i--];
        }
      }
      return shoots;

    case REMOVE_ALL_SHOOTS:
      return [];

    case REMOVE_SHOOT:
      shoots = Object.assign([], state);
      shoots.splice(action.payload, 1);
      return shoots;

    default:
      return state;
  }
}