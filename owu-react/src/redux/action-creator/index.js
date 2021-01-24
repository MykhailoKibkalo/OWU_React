import {CHECK_ITEM_IN_CART,CHECK_ITEM_IN_LIST} from "../action-types";


export * from './products-action-creator'


export const checkItemInCart = (product) => ({type: CHECK_ITEM_IN_CART, payload: product});
export const checkItemInList= (product) => ({type:CHECK_ITEM_IN_LIST, payload: product})
