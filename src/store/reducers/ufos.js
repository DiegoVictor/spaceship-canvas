import { CREATE_UFO } from '../action_types';

const initial_state = {
  /* Cycles between every new ufo */
  cadence: {
    remmaning: 0,
    value: 60
  }
};

export default (state = initial_state, action, rootStateUpdater) => {
  switch(action.type) {
    case CREATE_UFO:
      if (state.cadence.remmaning === 0) {
        return rootStateUpdater(state => ({
          enemies: (enemies => {
            enemies.push(action.payload)
            return enemies;
          })(Object.assign([], state.enemies)),

          ufos: Object.assign({}, state, {
            cadence: {
              ...state.ufos.cadence,
              remmaning: state.ufos.cadence.value
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