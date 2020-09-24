import React, { Component } from 'react';
import Quantity from '../quantity';
import BrownPriceTag from '../brownPriceTag';

import * as actions from '../../actions';
import { connect } from 'react-redux';

class ShopProduct extends Component {
    render() {
        const { _id, name, description, price } = this.props;
        return (
            <div className='shop-product'>
                <div className='shop-product__front'>
                    <img className='shop-product__front__image' src=".."/>
                    <div className='shop-product__front__name'>{name}</div>
                </div>
                <div className='shop-product__back'>
                    <div className='shop-product__back__name'>
                        {name}
                    </div>
                    <div className='shop-product__back__description'>
                        {description}
                    </div>
                    <BrownPriceTag className='shop-product__back__price' title={price}/>
                    <Quantity className='shop-product__back__quantity' quantity={1}/>
                </div>
            </div>
        )
    }
}

ShopProduct = connect(null, actions)(ShopProduct);

export default ShopProduct;