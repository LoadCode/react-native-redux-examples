import {createStore, combineReducers} from 'redux';
import {State} from '@interfaces/reduxInterfaces';

import counter from './counter/reducer';

const reducers = combineReducers<State>({
  counter,
});

const store = createStore(reducers);
export default store;
