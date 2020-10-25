import React, { Component } from "react";
import axios from "axios";

//import { connect } from 'react-redux';
//import * as actions from '../../actions';
import ShopItem from "./shop-item";
//import CartButton from "./cartButton";
//import ShopCart from "./shopCart";

export default class ShopContainer extends Component {
  constructor() {
    super();

    this.state = {
      pageTitle: "",
      isLoading: false,
      data: []
    };

    this.handleFilter = this.handleFilter.bind(this);
  }

  handleFilter(filter) {
    if (filter === "CLEAR_FILTERS") {
      this.getShopItems();
    } else {
      this.getShopItems(filter);
    }
  }

  getShopItems(filter = null) {
    const url_temp_prefix = 'https://cors-anywhere.herokuapp.com/'; 
    //const url = `${url_temp_prefix}https://frontdb-214a.restdb.io/rest/coll1`;
    const url = `${url_temp_prefix}https://bakeryproducts-0506.restdb.io/rest/bakery`;
     
    const data =   {
        "async": true,
        "crossDomain": true,
        "headers": {
        "content-type": "application/json",
        "x-apikey": "8b5e2e1cb8c2cc3be9622f06ca0958d1048d4",
        "cache-control": "no-cache"
      }};
    
    axios.get(url,data)
    .then(response => {
        console.log('responsesd',response.data);
        this.setState({
            data : response.data
        }
    )
      })
    .catch(error => {
        console.log('error',error);
    });
  }

  shopItems() {
    return this.state.data.map(item => {
      return <ShopItem key={item.id} item={item} />;
    });
  }

  componentDidMount() {
    this.getShopItems();
  }

  /*handleAddToCart = () => {
    if(document.getElementById('shop-cart').classList.contains('cart-hidden')) {
      document.getElementById('shop-cart').classList.remove('cart-hidden');
    } else {
      document.getElementById('shop-cart').classList.add('cart-hidden');
    }
  }*/

  render() {
    if (this.state.isLoading) {
      return <div>Loading...</div>;
    }

    return (
      <div className="homepage-wrapper">
        <div className="shop-items-wrapper">{this.shopItems()}</div>
        
      </div>
    );
  }
}
//CartButton was inside the div with the claseName shop-items-wrapper
//{this.state.showCart ? <ShopCart className='shop__cart'/> : ''}
//<CartButton onClick={this.handleAddToCart} className='shop__cart-button' icon='fas fa-cart-plus'/>
//ShopContainer = connect(mapStateToProps, actions)(ShopContainer);
