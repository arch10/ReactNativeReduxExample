import {breweryReducer} from './reducers/breweryReducer';
import {combineReducers, createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

const rootReduxer = combineReducers({
  brewery: breweryReducer
});

const store = createStore(rootReduxer, applyMiddleware(thunk));

export default store;
