import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk'
import screen from './reducers/screen';

export default createStore(combineReducers({
}), applyMiddleware(thunk));