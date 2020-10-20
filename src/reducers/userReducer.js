import {
    SET_CART_PRODUCTS,
    ADD_CART_PRODUCT,
} from '../actions/types';

const INITIAL_STATE = {
    cartProducts: [],
}

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case ADD_CART_PRODUCT:
            var exists = false
            const newCP = action.payload;
            var cartProducts = []
            state.cartProducts.map(cartProduct => {
                if(cartProduct.product.id == newCP.id) {
                    exists = true
                    cartProduct.quantity += 1;
                }
                cartProducts.push(cartProduct);
            })
            if(exists == false)  {
                cartProducts.push({
                    id: state.cartProducts.length + 1,
                    product: newCP,
                    quantity: 1
                })
            }
            return {
                ...state,
                cartProducts: cartProducts
            }
        case SET_CART_PRODUCTS:
            return {
                ...state,
                cartProducts: action.payload
            }
        default: return state;
    }
}