import {
    ADD_ITEM,
    REMOVE_ITEM
} from "../actions/cartActions";

export const cartState = {
    cart: localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : []
}

export const cartReducer = (state = cartState, action) => {
    switch(action.type) {
        case ADD_ITEM:
            if(!Object.values(state.cart).includes(action.payload)) {
                return {
                    ...state,
                    cart: [...state.cart, action.payload]
                };
            }
            return state;
        case REMOVE_ITEM:
            return {
                ...state,
                cart: state.cart.filter(item => item.id !== action.payload)
            };
        default: 
            return state;

    }
}