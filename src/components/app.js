import React, { Component } from 'react';

import PortfolioContainer from "./portfolio/portfolio-container";
import NavigationComponent from "./navigation/navigation-container";
import Home from "./pages/home";
import AboutUs from "./pages/aboutUs";
import Contact from "./pages/contact";
import Menu from "./pages/menu";

export default class app extends Component {
  render() {
    return (
      <div className='app'>
        <div className="logo_container">
          <img className="logo_img" src="logo.jpg"/>
        </div>
        <NavigationComponent/>
        <PortfolioContainer/>
      </div>
    );
  }
}
