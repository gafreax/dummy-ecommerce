import { CHANGE_SKIP, FETCH_DATA_FAILURE, FETCH_DATA_SUCCESS, FETCH_DATA_REQUEST } from "../actions.js";

const initialState = {
    error: null,
    loading: false,
    items: [],
    skip: 0,
    loaded: 0,
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
            error: null,
            loading: false,
            items: action.payload.products,
            total: action.payload.total,
            loaded: state.loaded + action.payload.products.lenght
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
