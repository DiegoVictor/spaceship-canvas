import { scored } from './player';
import { DROP_ITEM, MOVE_ITEMS, REMOVE_ITEM } from '../action_types';
import { random } from '../../utils';

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
      enemy.drop.forEach(drop => {
        for(let i = 0; i < random(drop.amount); i++) {
          let item = {
            height: 10,
            step: -1,
            type: drop.type,
            x: enemy.x + 4 + (-random(6) ^ (random(2) + 1)),
            y: enemy.y + 4,
            width: 10
          };

          if (typeof drop.value === 'number') {
            item.score = drop.value;
          }

          items.push(item);
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