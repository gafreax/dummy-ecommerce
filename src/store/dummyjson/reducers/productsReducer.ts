import { CHANGE_SKIP, FETCH_DATA_FAILURE, FETCH_DATA_SUCCESS, FETCH_DATA_REQUEST } from "../actions.js";
import { Action } from "../index.types.js";

import { ProductState } from "./productReducer.types.js";

const initialState:ProductState = {
    error: null,
    loading: false,
    items: [],
    skip: 0,
    loaded: 0,
    total: 0,
};

const productsReducer = (state = initialState, action: Action) => {

    switch (action.type) {
    case FETCH_DATA_REQUEST:
        return {
            ...state,
            loading: true,
            error: null,
        };
    case FETCH_DATA_SUCCESS:
        
        return {
            ...state,
            error: null,
            loading: false,
            items: action.payload.products,
            total: action.payload.total,
            loaded: action.payload.products[action.payload.products.length-1].id
        };
    case FETCH_DATA_FAILURE:
        return {
            ...state,
            loading: false,
            error: action.payload,
        };
    case CHANGE_SKIP: 
        return {
            ...state,
            error: null,
            skip: action.payload,
        };
    default:
        return state;
    }
};

export default productsReducer;
