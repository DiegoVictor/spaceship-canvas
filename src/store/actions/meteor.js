import { CREATE_METEOR } from '../action_types';
import { WIDTH } from '../../globals';

export function createMeteor(step = 1) {
  let size = 16;
  return {
    type: CREATE_METEOR,
    payload: {
      height: size,
      rotation: 0,
      score: 25,
      step,
      type: Math.floor(Math.random() * 4),
      x: parseInt(Math.random() * (WIDTH - size), 10),
      y: -size,
		  width: size
    }
 };
};