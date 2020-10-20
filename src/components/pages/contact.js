import React from "react";

import NavigationContainer from "../navigation/navigation-container";
//import FooterContainer from "../navigation/footer-container";
import MapContainer from "./googleMap";

export default function() {
    <NavigationContainer/>
    return (
        <div>
            <div className="wrapper-contact">
                <div className="address">
                    or. Peresecina <br/>
                    str. Mihai Eminescu
                </div>
                <div className="social-media">
                    Facebook <br/>
                    Instagram
                </div>
                <div className="phone">
                    Tel: 00-00-00-00 <br/>
                    Mob: 079 -- -- -- / 069 -- -- --
                </div>
                <div className="google-map">
                    Locatia pe harta
                    <MapContainer/>
                </div>
            </div>
            
        </div>
    );
} 