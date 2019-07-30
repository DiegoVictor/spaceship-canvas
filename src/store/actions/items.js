import { scored } from './player';
import { DROP_ITEM, MOVE_ITEMS, REMOVE_ITEM } from '../action_types';

export function dropItem(item) {
  return { type: DROP_ITEM, payload: item };
};

export function dropItems(enemy) {
  return dispatch => {
    function dropRecursive(items) {
      if (items.length > 0) {
        dispatch(dropItem(items.shift()));
        setTimeout(() => {
          dropRecursive(items);
        }, 200);
      }
    }

    dropRecursive((items => {
      enemy.drop.forEach(item => {
        for(let i = 0; i < Math.floor(Math.random() * item.amount); i++) {
          items.push({
            height: 10,
            score: item.value,
            step: -1,
            x: enemy.x + 4 + (-(Math.random() * 6) ^ ((Math.random() * 2) + 1)),
            y: enemy.y + 4,
            width: 10
          });
        }
      });
      return items;
    })([]));
  }
}

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