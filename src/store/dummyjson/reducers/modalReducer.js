import { SHOW_MODAL, HIDE_MODAL } from "../actions.js";

const initialState = {
    images: [],
    show: false,
};

const modalReducer = (state = initialState, action) => {

    switch (action.type) {
    case SHOW_MODAL:
        return {
            ...state,
            show: true,
            images: action.payload,
        };
    case HIDE_MODAL:
        return {
            ...state,
            show: false
        };
    default:
        return state;
    }
};

export default modalReducer;
