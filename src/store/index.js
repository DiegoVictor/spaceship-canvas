'use script';

import { createStore, combineReducers } from "redux";
import screen from './screen/reducers';

export default createStore(combineReducers({
  screen
}));