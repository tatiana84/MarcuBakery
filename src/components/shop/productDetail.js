import React, { Component } from "react";
import axios from "axios";

export default class ProductDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      shopItem: {}
    };
  }

  componentWillMount() {
    this.getShopItem();
  }

  getShopItem() {
    axios
      .get(
        `https://bakeryproducts-0506.restdb.io/media/(id or filename)?key=22631469345172666884/${
          this.props.match.params.slug
        }`,
        { withCredentials: true }
      )
      .then(response => {
        this.setState({
          ShopItem: response.data.shop_item
        });
      })
      .catch(error => {
        console.log("getshopitem error", error);
      });
  }

  render() {
    const {
      id,
      image,
      name,
      description,
      price
    } = this.state.shopItem;

    return (
      <div className="shop-detail-wrapper">
        <div className="image">
          <img src={image}/>
        </div>

        <div className="shop-detail-name-wrapper">
          <div className="name">{name}</div>
        </div>

        <div className="shop-detail-description-wrapper">
          <div className="description">{description}</div>
        </div>

        <div className="shop-detail-price-wrapper">
          <div className="price">{price}</div>
        </div>
      </div>
    );
  }
}
