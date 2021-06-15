import {createTypes} from 'redux-recompose';
import {Action} from '../../interfaces/reduxInterfaces';
import {CounterPayload} from '../../interfaces/counter';

export const actions = createTypes(
  ['INCREASE_COUNTER', 'DECREASE_COUNTER'],
  '@@COUNTER',
);

const actionCreators = {
  increaseCounter: (currentValue: number): Action<CounterPayload> => ({
    type: actions.INCREASE_COUNTER,
    payload: {value: currentValue + 1},
  }),
  decreaseCounter: (currentValue: number): Action<CounterPayload> => ({
    type: actions.DECREASE_COUNTER,
    payload: {value: currentValue - 1},
  }),
};

export default actionCreators;
