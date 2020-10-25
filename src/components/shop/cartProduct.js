import React, { Component } from 'react';
import Quantity from '../quantity';
import BrownPriceTag from '../brownPriceTag';

class CartProduct extends Component {
    render() {
        console.log(this.props);
        const { className, product, quantity } = this.props;
        const { name, price } = product;
        return (
            <div className={`${className} cart-product`}>
                <img className='cart-product__image' src='https://bakeryproducts-0506.restdb.io/media'/>
                <div className='cart-product__title'>{name}</div>
                <Quantity className='cart-product__quantity' quantity={quantity}/>
                <a className='cart-product__remove'>Remove</a>
                <BrownPriceTag className='cart-product__price' title={price}/>
            </div>
        )
    }
}

export default CartProduct;