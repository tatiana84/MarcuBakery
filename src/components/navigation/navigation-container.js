import React, { Component } from "react";

export default class NavigationComponent extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div>
                <button>Home</button>
                <button>About Us</button>
                <button>Menu</button>
                <button>Contact</button>
            </div>

        );
    }
}