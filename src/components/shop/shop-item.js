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
    return (
      <Link to={`/bakery/${id}`}>
        <div className="shop-item-wrapper">
          
          <div className="image">
            <img src={image} />
          </div>

          <div className="name">{name}</div>

          <div className="description">{description}</div>

          <div className="price">{price}</div>
        </div>
      </Link>
    );
  }
}
