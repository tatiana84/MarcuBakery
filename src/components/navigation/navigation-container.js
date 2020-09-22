import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import Logo from "../../../static/assets/images/logo.jpg";

export default class NavigationContainer extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div className="nav-wrapper">
                <div className="logo-container">
                    <img className="logo-img" src={Logo} alt="Logo"/>
                </div>
                <div className="left-side">
                    <div className="nav-link-wrapper">
                        <NavLink exact to="/" activeClassName="nav-link-active">Home</NavLink>
                    </div>
                    <div className="nav-link-wrapper">
                        <NavLink exact to="/about-us" activeClassName="nav-link-active">About Us</NavLink>
                    </div>
                    <div className="nav-link-wrapper">
                        <NavLink exact to="/shop" activeClassName="nav-link-active">Shop</NavLink>
                    </div>
                    <div className="nav-link-wrapper">
                        <NavLink exact to="/contact" activeClassName="nav-link-active">Contact</NavLink>
                    </div>
                </div>
                <div className="right-side">
                    <div className="nav-link-wrapper">
                        <NavLink exact to="/ShopCart" activeClassName="nav-link-active">ShopCart</NavLink>
                    </div>
                    <div className="nav-link-wrapper">
                        <NavLink exact to="Login" activeClassName="nav-link-active">Log-in</NavLink>
                    </div>
                </div>
                <div className="portfolio-wrapper-motto">
                    Gatit cu dragoste, savurat cu placere!
                </div>
            </div>
        );
    }
}