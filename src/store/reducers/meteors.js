import { CREATE_METEOR } from '../action_types';

const initial_state = {
  /* Cycles between every new meteor */
  cadence: {
    remmaning: 0,
    value: 60
  }
};

export default (state = initial_state, action, rootStateUpdater) => {
  switch(action.type) {
    case CREATE_METEOR:
      if (state.cadence.remmaning === 0) {
        return rootStateUpdater(state => ({
          enemies: (enemies => {
            enemies.push(action.payload)
            return enemies;
          })(Object.assign([], state.enemies)),

          meteors: Object.assign({}, state, {
            cadence: {
              ...state.meteors.cadence,
              remmaning: state.meteors.cadence.value
            }
          })
        }));
      }

      return Object.assign({}, state, {
        cadence: {
          ...state.cadence,
          remmaning: state.cadence.remmaning - 1
        }
      });;

    default:
      return state;
  }
};