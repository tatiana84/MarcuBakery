import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class ShopItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ShopItemClass: ""
    };
  }

  render() {
    const { id, image, name, description,  price } = this.props.item;
    const img_url = 'https://bakeryproducts-0506.restdb.io/media';
    return (
      <Link to={`/bakery/${id}`}>
        <div className="shop-item-wrapper">
          
          <div className="image">
            <img src={img_url+'/'+image} />
          </div>

          <div className="name">Name: {name}</div>

          <div className="description">Description: {description}</div>

          <div className="price">Price: {price} MDL</div>
        </div>

        <div>
          {this.state.data != null ? this.ShopItem() : 'Loading'}
        </div>
      </Link>
    );
  }
}
