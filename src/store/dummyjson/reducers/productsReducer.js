import { CHANGE_SKIP, FETCH_DATA_FAILURE, FETCH_DATA_SUCCESS, FETCH_DATA_REQUEST } from "../actions.js";

const initialState = {
    dataIsPresent: false,
    error: null,
    loading: false,
    products: [],
    skip: 0,
    total: 0,
};

const productsReducer = (state = initialState, action) => {

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
            dataIsPresent: true,
            error: null,
            loading: false,
            products: action.payload.products,
            total: action.payload.total
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
