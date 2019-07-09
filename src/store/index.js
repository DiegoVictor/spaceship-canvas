import { createStore, applyMiddleware } from "redux";
import combineReducers from './combine_reducers';
import thunk from 'redux-thunk'
import screen from './reducers/screen';
import background from './reducers/background';
import progress from './reducers/progress';
import player from './reducers/player';
import spaceship from './reducers/spaceship';
import spaceship_canvas from './reducers/spaceship-canvas';
import keyboard from './reducers/keyboard';
import shoots from './reducers/shoots';
import meteors from './reducers/meteors';
import enemies from './reducers/enemies';
import game from './reducers/game';

export default createStore(combineReducers({
  screen, background, progress, spaceship_canvas, player, spaceship, keyboard, shoots, meteors, enemies, game
}), applyMiddleware(thunk));