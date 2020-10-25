import React from "react";

//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import NavigationContainer from "../navigation/navigation-container";
//import FooterContainer from "../navigation/footer-container";
import MapContainer from "./googleMap";
import Phone from "../../../static/assets/images/telefon.png";
import Facebook from "../../../static/assets/images/facebook.png";
import Instagram from "../../../static/assets/images/instagram.png";
import Locatie from "../../../static/assets/images/locatie.png";

export default function() {
    <NavigationContainer/>
    return (
        <div>
            <div className="wrapper-container">
                <div className="address">
                    or. Peresecina, str. Mihai Eminescu
                </div>
                <div className="phone">
                    <img src={Phone} alt="PhoneIcon"/>
                    0-(22)-00-00-00, 0-(79) -- -- --, 0-(69) -- -- --                  
                </div>
                
                <a href="https://www.facebook.com/marcubakery" className="facebook" target="_blank">
                    <img src={Facebook} alt="FacebookIcon"/>
                </a> 
                <a href="https://www.instagram.com/marcu_bakery/?hl=ru" className="instagram" target="_blank">
                    <img src={Instagram} alt="InstagramIcon"/>
                </a>
                <a href="https://www.google.com/maps/place/M2,+Peresecina,+%D0%9C%D0%BE%D0%BB%D0%B4%D0%B0%D0%B2%D0%B8%D1%8F/@47.1395347,28.7277182,11z/data=!4m16!1m10!4m9!1m4!2m2!1d28.8369684!2d47.0178386!4e1!1m3!2m2!1d28.773644!2d47.265201!3m4!1s0x40cbdd425ac68cb3:0x51bdaee1ad0ee0d9!8m2!3d47.2652819!4d28.7736721" className="locatie" target="_blank">
                    <img src={Locatie} alt="LocatieIcon"/>
                </a>
                
                <div className="google-map">
                    <MapContainer/>
                </div>
            </div>
            
        </div>
    );
} 
//<FontAwesomeIcon icon="phoneSquare/" />