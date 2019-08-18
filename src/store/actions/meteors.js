import { CREATE_METEOR } from '../action_types';
import { WIDTH } from '../../globals';
import { random } from '../../utils';

export function createMeteor(step = 1) {
  let size = 16;
  return {
    type: CREATE_METEOR,
    payload: {
      drop: [
        {type: 'point', value: 50, amount: 4},
        {type: 'point', value: 150, amount: 2},
        {type: 'point', value: 300, amount: 1}
      ],
      height: size,
      rotation: 0,
      score: 25,
      step,
      type: 'meteor',
      version: random(12),
      x: parseInt(random(WIDTH - size), 10),
      y: -size,
      width: size
    }
  };
};