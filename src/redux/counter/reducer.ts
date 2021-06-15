import {createReducer} from 'redux-recompose';
import {CounterState, Action, State} from '../../interfaces/reduxInterfaces';
import {CounterPayload} from '../../interfaces/counter';

import {actions} from './actions';

const initialState: CounterState = {
  counterValue: 5,
};

const reducerDescription = {
  [actions.INCREASE_COUNTER]: (
    state: State,
    {payload}: Action<CounterPayload>,
  ) => ({
    ...state,
    counterValue: payload.value,
  }),
  [actions.DECREASE_COUNTER]: (
    state: State,
    {payload}: Action<CounterPayload>,
  ) => ({
    ...state,
    counterValue: payload.value,
  }),
};

export default createReducer(initialState, reducerDescription);
