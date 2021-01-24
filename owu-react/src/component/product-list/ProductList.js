import React, {useEffect} from 'react';
import {useSelector, useDispatch} from "react-redux";
import {doFetch, checkItemInCart, checkItemInList} from "../../redux";
import ProductItem from "../product-item/ProductItem";
import './ProductList.css';

export function ProductList() {
    const dispatch = useDispatch();
    const {cart, wishList, products} = useSelector((
        {cart: {cart}, wishList: {wishList}, products: {products}}) => ({cart, wishList, products}));

    useEffect(() => {
        doFetch(dispatch);
    }, [dispatch]);

    const onAddToCart = (product) => {
        dispatch(checkItemInCart(product))
    }

    const onAddToWishList = (product) => {
        dispatch(checkItemInList(product))
    }

    console.log(cart.id);
    console.log(wishList.id);
    return (
        <div className={'list'}>
            {products && products.map((product) => (
                <ProductItem
                    isAddedToWishList={!!wishList.find(({id}) => id === product.id)}
                    isAddedToCart={!!cart.find(({id}) => id === product.id)}
                    onAddToCart={onAddToCart}
                    onAddToWishList={onAddToWishList}
                    product={product}
                    key={product.id}
                />
            ))}
        </div>
    );
}
