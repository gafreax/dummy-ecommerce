import { combineReducers, configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import productsReducer from './reducers/productsReducer.js';

const middleware = [thunk];

const rootReducer = combineReducers({
    products: productsReducer,
});

const store = configureStore({
    reducer: rootReducer,
    middleware: [...middleware],
});


export default store;