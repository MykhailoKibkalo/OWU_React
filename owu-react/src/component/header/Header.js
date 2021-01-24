import React, {useMemo} from 'react';
import './Header.css'
import {useSelector} from "react-redux";
export default function Header () {
    const {cart,wishList} = useSelector(({cart:{cart}, wishList: {wishList}}) => ({cart,wishList}));

    const sumCart = useMemo(() => {
        const cartClone = [...cart];
        return cartClone.reduce((acc, item) => {
            const {price} = item;
            return acc + price;
        },0)
    }, [cart]);

    const sumLike = useMemo( () => {
        const wishListClone = [...wishList];
        return wishListClone.reduce((acc, item) => {
            const {price} = item;
            return acc + price;
        }, 0)
    }, [wishList]);

    return (    
        <div className={'header'}>
            <div className={'logo'}>
                <h2>Welcome to MikeShop</h2>
            </div>
            <div className={'counter'}>
                <div className={'cart'}>
                    Cart: {cart.length}
                    <div className={'sumCart'}>
                      Total price: {sumCart} UAH;
                    </div>
                </div>
                <div className={'liked'}>
                    Liked: {wishList.length}
                    <div className={'sumLike'}>
                        Total price: {sumLike} UAH;
                    </div>
                </div>
            </div>
        </div>
    );
}
