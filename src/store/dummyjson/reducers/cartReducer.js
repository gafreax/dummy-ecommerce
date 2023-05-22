import { ADD_TO_CART, SET_CART } from "../actions";

const initialState = {
    cartItems: [],
    totalPrice: 0,
}
const totalPrice = (cartItems) => {
    if(cartItems.length === 0) return 0;
    return cartItems?.reduce((prev, curr) => prev + (curr?.price || 0), 0);
}
const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return {
                ...state,
                cartItems: [...state.cartItems, action.payload],
                totalPrice: action.payload.price + totalPrice(state.cartItems)
            }
        case SET_CART:
            return {
                ...state,
                cartItems: action.payload,
                totalPrice: totalPrice(action.payload)
            }
        default:
            return state;
    }
}

export default cartReducer;