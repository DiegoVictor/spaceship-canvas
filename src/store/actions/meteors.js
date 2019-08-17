import { CREATE_METEOR } from '../action_types';
import { WIDTH } from '../../globals';

export function createMeteor(step = 1) {
  let size = 16;
  return {
    type: CREATE_METEOR,
    payload: {
      type: "meteor",
      drop: [
        {value: 50, amount: 4},
        {value: 150, amount: 2},
        {value: 300, amount: 1}
      ],
      height: size,
      rotation: 0,
      score: 25,
      step,
      version: Math.floor(Math.random() * 12),
      x: parseInt(Math.random() * (WIDTH - size), 10),
      y: -size,
		  width: size
    }
  };
};