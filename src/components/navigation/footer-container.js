import React, { Component } from "react";

import Facebook from "../../../static/assets/images/facebook-brands.svg";
//import Instagram from "../../../static/assets/images/instagram-brands.svg";

//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  
export default class FooterContainer extends Component {
    constructor() {
      super();
    }
  
    render() {
        return (
            <div className="footer-wrapper">
                <h4 className="logo-text">Gatit cu dragoste, savurat cu placere!</h4>

                <div className="footer-wrapper-contact">
                    <div className="address">
                        or. Peresecina <br/>
                        str. Mihai Eminescu
                    </div>

                    <div className="phone">
                        Tel: 00-00-00-00 <br/>
                        Mob: 079 -- -- -- / 069 -- -- --
                    </div>
                </div>
        
                <div className='footer-wrapper-social-media'>
                    <a href='https://www.facebook.com/marcubakery/' className="footer_socials" target="_blank">
                        <img src={Facebook} alt="FacebookIcon"/>        
                    </a>
           
                    <a href='https://www.instagram.com/marcu_bakery/' className="footer_socials" target="_blank">
                        <img src={Instagram} alt="Instagram" />    
                    </a>
                </div>
            </div>
        );
    }
}