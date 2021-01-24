import React from "react";
import './ProductItem.css';

export default function ProductItem({
                                        isAddedToWishList,
                                        isAddedToCart,
                                        onAddToCart,
                                        onAddToWishList,
                                        product
                                    }) {

    return (
        <div className={'item'}>
            <div className={'title'}>
                <p>{product.title}</p>
            </div>

            <div className={'body'}>
                <div className={'img'}>
                    <img src={product.image} alt={product.category} width={'100%'} height={'100%'}/>

                </div>
                <div className={'description'}>
                    <p> {product.description}</p>
                </div>
            </div>

            <div className={'button'}>
                <div className={'Price'}>
                    <p>Price: {product.price} UAH</p>
                </div>
                <div className={'btn'}>
                    <button
                        className={isAddedToCart ? 'cartBtn cartRemove' : 'cartBtn'}
                        onClick={()=>{onAddToCart(product)}}
                    >
                        {isAddedToCart ? 'Del' : 'Buy'}
                    </button>

                    <button
                        className={isAddedToWishList ? 'likeBtn likeRemove' : 'likeBtn'}
                        onClick={() => {onAddToWishList(product)}}
                    >
                        {isAddedToWishList ? 'dont Like' : 'Like'}
                    </button>
                </div>
            </div>

        </div>
    );
}
