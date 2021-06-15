export interface Action<T = null> {
  type: string;
  target?: string;
  payload: T;
}

export interface CounterState {
  counterValue: number;
}

export interface State {
  counter: CounterState;
}
