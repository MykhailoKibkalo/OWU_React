import {combineReducers} from "redux";
import cartReducer from './cart'
import WishListReducer from './wishlist'
import productsReducer from './products';
export * from './cart';
export * from './wishlist';
export const reducer = combineReducers({
    cart: cartReducer,
    wishList: WishListReducer,
    products: productsReducer
})

