
import { Reducer } from "react";
import { FormAction, FormState } from "./index.types";

export const initialState:FormState = {
    product: {
        title: undefined,
        description: undefined,
        price: undefined,
        discountPercentage: undefined,
        rating: undefined,
        stock: undefined,
        brand: undefined,
        category: undefined,
    },
    changed: false,
    valid: true,
};

const isValid = (state: FormState) => {
    const { product } = state;
    // todo: ciclo per tutte le entries di product recuperando 
    //      il valore e verificando che sia valido
    for(const [,value]  of Object.entries(product)) {
        if(!value?.valid) {
            return false;
        }
    }
    return true;
}

export const formReducer: Reducer<FormState, FormAction> = (state = initialState, action) => {
    const updatedState = { 
        ...state,
        changed: true, 
        valid: isValid(state)
    };
    const { value, valid } = action.payload;
    switch (action.type) {
        case "SET_PRODUCT_TITLE":
            return {
                ...updatedState,
                product: {
                    ...state.product,
                    title: { value, valid }
                }
            };
        case "SET_PRODUCT_DESCRIPTION":
            return {
                ...updatedState,
                product: {
                    ...state.product,
                    description: { value, valid }
                }
            };
        case "SET_PRODUCT_PRICE":
            return {
                ...updatedState,
                product: {
                    ...state.product,
                    price: { value: Number(value), valid }
                }
            };
        case "SET_PRODUCT_DISCOUNT_PERCENTAGE":
            return {
                ...updatedState,
                product: {
                    ...state.product,
                    discountPercentage: { value: Number(value), valid }
                }
            };
        case "SET_PRODUCT_RATING":
            return {
                ...updatedState,
                product: {
                    ...state.product,
                    rating: { value: Number(value), valid }
                }
            };
        case "SET_PRODUCT_STOCK":
            return {
                ...updatedState,
                product: {
                    ...state.product,
                    stock: { value: Number(value), valid }
                }
            };
        case "SET_PRODUCT_BRAND":
            return {
                ...updatedState,
                product: {
                    ...state.product,
                    brand: { value, valid }
                }
            };
        case "SET_PRODUCT_CATEGORY":
            return {
                ...updatedState,
                product: {
                    ...state.product,
                    category: { value, valid }
                }
            };
        default:
            return state;
    }
};