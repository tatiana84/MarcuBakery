import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavigationContainer from "./navigation/navigation-container";
import Home from "./pages/home";
import AboutUs from "./pages/aboutUs";
import Contact from "./pages/contact";
import Shop from "./shop/shop-detail";

export default class app extends Component {
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
          </Switch>
        </Router>
      </div>
    );
  }
}
