import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk'
import screen from './reducers/screen';
import background from './reducers/background';
import progress from './reducers/progress';

export default createStore(combineReducers({
  screen, background, progress
}), applyMiddleware(thunk));