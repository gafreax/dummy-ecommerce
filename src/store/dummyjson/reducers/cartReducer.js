import { REMOVE_FROM_CART, ADD_TO_CART, SET_CART } from "../actions";

const initialState = {
    cartItems: [],
    totalPrice: 0,
}


// funzione di esempio per vedere come recupereare un elemento da rimuovere
const findToRemove =  (id, cartItems) => {
    for (let i = 0; i < cartItems.length; i++) {
        if (cartItems[i].id === id) {
            return i;
        }
    }
    return -1;
}

// esempio "pericoloso" di come rimuovere da un array un elemento
// eslint-disable-next-line no-unused-vars
const removeWithFind = (id, cartItems) => {
    const indexToRemove = findToRemove(id, cartItems);
    delete cartItems[indexToRemove];
    return cartItems;
}

// eslint-disable-next-line no-unused-vars
const safeRemoveWithFind = () => {
    const cartItems = {
        cart: {
          cartItems: [
            {
              id: 2,
              title: 'iPhone X',
              price: 899
            },
            {
              id: 1,
              title: 'iPhone 9',
              price: 549
            },
            {
              id: 1,
              title: 'iPhone 9',
              price: 549
            }
          ],
          totalPrice: null
        }
    }
    const indexToRemove = findToRemove(2, cartItems);
    delete cartItems[indexToRemove];
    // qui siamo sicuri di avere un cartItems corretto
}

// esempio "lento" di clone
// eslint-disable-next-line no-unused-vars
const deepClone = (cartItems) => {
    return JSON.parse(JSON.stringify(cartItems));
}

// soluzione lenta ma sicura
const removeFromCart = (id, cartItems) => {
    let removed = false;
    let updatedCart = [];
    for (let i = 0; i < cartItems.length; i++) {
        if (cartItems[i].id !== id || removed) {
            updatedCart.push(cartItems[i]);
        } else if( cartItems[i].id === id) {
            removed = true;
        }
    }
    return updatedCart;
}

const totalPrice = (cartItems) => {
    if (cartItems.length === 0) return 0;
    return cartItems?.reduce((prev, curr) => {
        const tot = prev + (curr?.price || 0);
        return tot;
    }, 0);
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return {
                ...state,
                cartItems: [...state.cartItems, action.payload],
                totalPrice: action.payload.price + totalPrice(state.cartItems)
            }
        case REMOVE_FROM_CART:
            const updatedCart= removeFromCart(action.payload,state.cartItems )
            return {
                ...state,
                cartItems: updatedCart,
                totalPrice: totalPrice(updatedCart)
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