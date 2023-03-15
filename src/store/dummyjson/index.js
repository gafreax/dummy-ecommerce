import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import productsReducer from './reducers/productsReducer.js';

const store = createStore(
  productsReducer,
  applyMiddleware(thunkMiddleware)
);

export default store;