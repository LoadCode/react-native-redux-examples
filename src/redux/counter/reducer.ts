import {createReducer} from 'redux-recompose';
import {CounterState, Action, State} from '@interfaces/reduxInterfaces';

import {actions} from './actions';

const initialState: CounterState = {
  counterValue: 0,
};

const reducerDescription = {
  [actions.UPDATE_COUNTER]: (state: State, {payload}: Action<number>) => ({
    ...state,
    counterValue: payload,
  }),
};

export default createReducer(initialState, reducerDescription);
