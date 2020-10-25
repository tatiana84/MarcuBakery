import React from "react";

//import { connect } from 'react-redux';
//import * as actions from '../../actions';
import ShopContainer from "../shop/shop-container";
//import CartButton from "../shop/cartButton";

/*handleAddToCart = () => {
    if(document.getElementById('shop-cart').classList.contains('cart-hidden')) {
        document.getElementById('shop-cart').classList.remove('cart-hidden');
    } else {
        document.getElementById('shop-cart').classList.add('cart-hidden');
    }
}*/

export default function() {
    return (
        <ShopContainer/>
    );
}