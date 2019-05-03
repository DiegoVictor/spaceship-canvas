import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk'
import screen from './reducers/screen';
import background from './reducers/background';

export default createStore(combineReducers({
  screen, background
}), applyMiddleware(thunk));