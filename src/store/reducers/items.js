import { HEIGHT } from '../../globals';
import { DROP_ITEM, MOVE_ITEMS, REMOVE_ITEM } from "../action_types";

const initial_state = [];

export default (state = initial_state, action) => {
  let items;

  switch (action.type) {
    case DROP_ITEM:
      items = Object.assign([], state);
      items.push(action.payload);
      return items;

    case MOVE_ITEMS:
      items = Object.assign([], state);
      for(let i in items) {
        items[i].y += items[i].step;
        items[i].step += 0.02;
        if (items[i].y > HEIGHT) {
          items.splice(i--, 1);
          continue;
        }
      }
      return items;

    case REMOVE_ITEM:
      items = Object.assign([], state);
      items.splice(action.payload, 1);
      return items;

    default:
      return state;
  }
};