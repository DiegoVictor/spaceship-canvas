import { SET_CREDITS, SET_MULTIPLIER, RESET_PLAYER, SCORED } from '../action_types';

const initial_state = {
  credits: 3,
  score: 0,
  multiplier: 1
};

export default (state = initial_state, action) => {
  switch(action.type) {
    case SET_CREDITS:
      if (state.credits > 0) {
        return Object.assign({}, state, {
          credits: state.credits + action.payload
        });
      }
      return state;
    
    case SET_MULTIPLIER:
      return Object.assign({}, state, {
        multiplier: action.payload
      });
    
    case RESET_PLAYER:
      return Object.assign({}, state, {
        multiplier: 1,
        credits: 3,
        score: 0
      });
    
    case SCORED:
      if (typeof action.payload.type === 'string') {
        switch (action.payload.type) {
          case 'mult':
            return Object.assign({}, state, {
              multiplier: state.multiplier + 1
            });
  
          default:
          case 'point':
            return Object.assign({}, state, {
              score: state.score + action.payload * state.multiplier
            });
        }
      }
      return state;

    default:
      return state;
  }
}