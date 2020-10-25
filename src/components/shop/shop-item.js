import React, { Component } from "react";
import { Link } from "react-router-dom";

//import * as actions from '../../actions';
//import { connect } from 'react-redux';
import BrownPriceTag from "../brownPriceTag";
//import FooterContainer from "../navigation/footer-container";
import CartButton from "./cartButton";
import Quantity from "../quantity";

export default class ShopItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ShopItemClass: ""
    };
  }

  handleAddToCart = () => {
    if(document.getElementById('shop-cart').classList.contains('cart-hidden')) {
      document.getElementById('shop-cart').classList.remove('cart-hidden');
      const { id, imageUrl, name, description, price } = this.props;
      this.props.addCartProduct({ id, imageUrl, name, description, price });
    } else {
      document.getElementById('shop-cart').classList.add('cart-hidden');
    }
  }

  /*handleAddToCart = () => {
    if(document.getElementById('shop-cart').classList.contains('cart-hidden')) {
      document.getElementById('shop-cart').classList.remove('cart-hidden');
    } else {
      document.getElementById('shop-cart').classList.add('cart-hidden');
    }
  }
  */

  render() {
    const { id, image, name, description,  price } = this.props.item;
    const img_url = 'https://bakeryproducts-0506.restdb.io/media';
    return (
      <Link to={`/bakery/${id}`}>
        <div className="shop-item-wrapper">
          <div className="products">

            <div className="product">
              <div className="image">
                <img src={img_url+'/'+image} />
              </div>
              <div className="name">{name}</div>
              <div className="description">{description}</div>
              <BrownPriceTag className="price" title={price} />
              <div className="rating">4.5 Stars (10 Reviews)</div>
              <a onClick={this.handleAddToCart} className="back__add-to-cart">
                <CartButton onClick={this.handleAddToCart} className='shop__cart-button' icon='fas fa-cart-plus'/>
              </a>
              <Quantity className='shop-product__back__quantity' quantity={1}/>
            </div>           
          </div>
        </div>
      </Link>
    );
  }
}
