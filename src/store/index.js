import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk'
import screen from './reducers/screen';
import background from './reducers/background';
import progress from './reducers/progress';
import player from './reducers/player';
import spaceship from './reducers/spaceship';
import spaceship_canvas from './reducers/spaceship-canvas';
import keyboard from './reducers/keyboard';

export default createStore(combineReducers({
  screen, background, progress, spaceship_canvas, player, spaceship, keyboard
}), applyMiddleware(thunk));