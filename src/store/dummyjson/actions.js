export const FETCH_DATA_REQUEST = 'FETCH_DATA_REQUEST';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';
export const CHANGE_SKIP = "CHANGE_SKIP";
export const SHOW_MODAL = "SHOW_MODAL";
export const HIDE_MODAL = "HIDE_MODAL";
export const ADD_TO_CART = "ADD_TO_CART";
export const SET_CART = "SET_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";

export const addToCart = (cartItem) => ({
    type: ADD_TO_CART,
    payload: cartItem,
});
export const removeFromCart = (id) => ({
    type: REMOVE_FROM_CART,
    payload: id,
});

export const setCart = (cart) => ({
    type: SET_CART,
    payload: cart,
});

export const fetchDataRequest = () => ({
    type: FETCH_DATA_REQUEST,
});

export const fetchDataSuccess = (data) => ({
    type: FETCH_DATA_SUCCESS,
    payload: data,
});

export const fetchDataFailure = (error) => ({
    type: FETCH_DATA_FAILURE,
    payload: error,
});

export const changeSkip = (skip) => ({
    type: CHANGE_SKIP,
    payload: skip,
});

export const showModal = (images) => ({
    type: SHOW_MODAL,
    payload: images
})
export const hideModal = () => ({
    type: HIDE_MODAL
})