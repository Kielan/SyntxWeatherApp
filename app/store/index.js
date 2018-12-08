import { compose, createStore } from 'redux';
import { reducers } from './reducers';
import { middleware } from './middleware';
import { StateManager } from './manager';
//const persistedReducer = persistCombineReducers(persistConfig, reducers);

const store = createStore(reducers, compose(middleware));
const manager = new StateManager(store);

export { manager, store };
