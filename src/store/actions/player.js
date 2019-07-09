import { SET_CREDITS, SET_MULTIPLIER, RESET_PLAYER } from '../action_types';

export function setCredits(value) {
  return { type: SET_CREDITS, payload: value };
};

export function setMultiplier(value) {
  return { type: SET_MULTIPLIER, payload: value };
};

export function resetPlayer() {
  return { type: RESET_PLAYER };
};