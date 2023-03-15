import { FETCH_DATA_FAILURE, FETCH_DATA_SUCCESS, FETCH_DATA_REQUEST } from "../actions.js";

const initialState = {
    products: [],
    skip: 0,
    dataIsPresent: false,
    loading: false,
    error: null,
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
            loading: false,
            products: action.payload,
        };
    case FETCH_DATA_FAILURE:
        return {
            ...state,
            loading: false,
            error: action.payload,
        };
    default:
        return state;
    }
};

export default productsReducer;
