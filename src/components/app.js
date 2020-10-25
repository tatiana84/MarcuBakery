import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NavigationContainer from "./navigation/navigation-container";
//import FooterContainer from "./navigation/footer-container";
import Home from "./pages/home";
import AboutUs from "./pages/aboutUs";
import Contact from "./pages/contact";
import Shop from "./pages/shop";
import ShopCart from "./shop/shopCart";
import BakeryItem from "./pages/bakeryItem";
//import Icons from "./helpers/icons";

export default class app extends Component {
  constructor(props) {
    super(props);

//Icons();
  };

  render() {
    return (
      <div className='app'>
        <Router>
          <NavigationContainer/>
          <Switch>
            <Route exact path="/" component={Home}/> 

            <Route path="/aboutUs" component={AboutUs}/>
            <Route path="/shop" component={Shop}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/ShopCart" component={ShopCart}/>
            <Route exact path="/bakery/:bakery_id" component={BakeryItem}/>
          </Switch>
        </Router>
      </div>
    );
  }
}
