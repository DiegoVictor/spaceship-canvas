import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk'
import screen from './reducers/screen';
import background from './reducers/background';
import progress from './reducers/progress';
import player from './reducers/player';
import spaceship_canvas from './reducers/spaceship-canvas';

export default createStore(combineReducers({
  screen, background, progress, spaceship_canvas, player
}), applyMiddleware(thunk));