import {createTypes} from 'redux-recompose';
import {Action} from '@interfaces/reduxInterfaces';

export const actions = createTypes(['UPDATE_COUNTER'], '@@COUNTER');

const actionCreators = {
  updateCounter: (currentValue: number): Action<number> => ({
    type: actions.UPDATE_COUNTER,
    payload: currentValue,
  }),
};

export default actionCreators;
