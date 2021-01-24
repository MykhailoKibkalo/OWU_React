import {CHECK_ITEM_IN_CART} from '../action-types'

const initialState = {
    cart: []
}
const reducer = (state = initialState, action) => {
    const {cart} = state;
    const {type, payload} = action;
    switch (type) {
        case CHECK_ITEM_IN_CART: {
            const updateCart = cart.filter((el) => el.id !== payload.id)

            if (updateCart.length === cart.length) {
                updateCart.push(payload);
            }
            return {...state, cart: updateCart}
        }
        default: {
            return state
        }
    }
}
export default reducer;
