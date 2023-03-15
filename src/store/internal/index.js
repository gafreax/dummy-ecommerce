import { createStore } from 'redux';
import reducers from './reducers/index.js';
import { clear, increment, decrement } from './actions';

const initialState = { counter: 0 };


export const store = createStore(reducers, initialState);

export { clear, increment, decrement};