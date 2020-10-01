import React, { Component } from "react";
import axios from "axios";

import ShopItem from "./shop-item";

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
    axios
      .get("https://bakeryproducts-0506.restdb.io/media/(id or filename)?key=22631469345172666884")
      .then(response => {
        if (filter) {
          this.setState({
            data: response.data.shop_items.filter(item => {
              return item.category === filter;
            })
          });
        } else {
          this.setState({
            data: response.data.shop_items
          });
        }
      })
      .catch(error => {
        console.log(error);
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
