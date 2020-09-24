import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actions from '../../actions';
import ShopProduct from './shopProduct';

class Shop extends Component {

    constructor() {
        super()
    }

    componentDidMount() {
        this.props.fetchShopProducts();
    }

    render() {
        return (
            <div className='shop'>
                <div className='shop__products'>
                    <ShopProduct {...product} key={product._id} />
                </div>
            </div>
        )
    }
}

//Shop = connect(mapStateToProps, actions)(Shop);

export default Shop;