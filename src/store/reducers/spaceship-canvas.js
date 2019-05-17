import { SET_SPRITESHEET } from '../action_types';

const initial_state = {
  img: null
};

export default (state = initial_state, action) => {
  switch (action.type) {
    case SET_SPRITESHEET:
      return Object.assign({}, state, { img: action.payload });

    default:
      return state;
  }
};