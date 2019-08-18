import { CREATE_UFO } from "../action_types";
import { random } from '../../utils';

export function createUfo(paths) {
  let size = 20;
  return dispatch => {
    dispatch({
      type: CREATE_UFO,
      payload: {
        drop: [
          {type: 'point', value: 50, amount: 5},
          {type: 'point', value: 150, amount: 4},
          {type: 'point', value: 300, amount: 3},
          {type: 'mult', amount: 2}
        ],
        height: size,
        miliseconds: new Date().getTime(),
        paths,
        score: 150, 
        type: 'ufo',
        version: random(3),
        x: -size,
        y: 5 + random(95),
        width: size
      }
    });
  };
}
