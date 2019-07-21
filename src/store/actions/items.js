import { scored } from './player';
import { DROP_ITEM, MOVE_ITEMS, REMOVE_ITEM } from '../action_types';

export function dropItem(x, y, value, count = 1) {
  return dispatch => {
    for(let i = 0; i < count; i++) {
      setTimeout(() => {
        dispatch({
          type: DROP_ITEM,
          payload: {
            height: 8,
            score: value,
            step: -1,
            x: x + 4,
            y: y + 4,
            width: 8
          },
        });
      }, i * 200);
    }
  };
};

export function moveItems() {
  return { type: MOVE_ITEMS };
};

export function removeItem(index) {
  return { type: REMOVE_ITEM, payload: index};
};

export function collectItem(item, index) {
  return dispatch => {
    dispatch(scored(item));
    dispatch(removeItem(index));
  };
};