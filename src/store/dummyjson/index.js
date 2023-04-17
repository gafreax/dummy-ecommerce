import { combineReducers, configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import productsReducer from './reducers/productsReducer.js';
import modalReducer from './reducers/modalReducer.js';

const middleware = [thunk];

const rootReducer = combineReducers({
    products: productsReducer,
    modal: modalReducer,
});

const store = configureStore({
    reducer: rootReducer,
    middleware: [...middleware],
});


export default store;