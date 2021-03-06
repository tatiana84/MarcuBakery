import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import Logo from "../../../static/assets/images/logo.png";

export default class NavigationContainer extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div>
                <div className="logo-container">
                    <img className="logo-img" src={Logo} alt="Logo"/>
                </div>
                <div className="nav-wrapper">
                    <div className="left-side">
                        <div className="nav-link-wrapper">
                            <NavLink exact to="/" activeClassName="nav-link-active">Home</NavLink>
                        </div>
                        <div className="nav-link-wrapper">
                            <NavLink exact to="/aboutUs" activeClassName="nav-link-active">About Us</NavLink>
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
                    </div>
                </div>
            </div>
        );
    }
}