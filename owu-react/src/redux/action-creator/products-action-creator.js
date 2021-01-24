import {SET_PRODUCTS} from '../action-types'
export const setProduct = (payload) => ({type: SET_PRODUCTS,payload});

export const  doFetch =  async (dispatch) => {
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();
    dispatch(setProduct(data));
}
