import { combineReducers, configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import productsReducer from './reducers/productsReducer.ts';
import modalReducer from './reducers/modalReducer.js';
import cartReducer from './reducers/cartReducer.js';

const middleware = [thunk];

const rootReducer = combineReducers({
    cart: cartReducer,
    products: productsReducer,
    modal: modalReducer,
});

const store = configureStore({
    reducer: rootReducer,
    middleware: [...middleware],
});


export default store;