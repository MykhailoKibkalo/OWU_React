import React from 'react';
import './App.css';
import Header from "./component/header/Header";
import {ProductList} from "./component/product-list/ProductList";

export default function App () {


    return (
        <div>
            <Header/>
            <ProductList/>
        </div>
    );
}
