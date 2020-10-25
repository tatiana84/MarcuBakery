import React, { Component } from "react";

import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
 
export class MapContainer extends Component {
  render() {
    return (
      <Map google={this.props.google} zoom={20}>
 
        <Marker onClick={this.onMarkerClick}
          name={'M2, Peresecina'} 
        />
 
        <InfoWindow onClose={this.onInfoWindowClose}>
        </InfoWindow>
      </Map>
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: ('https://www.google.com/maps/dir/47.0178386,28.8369684/47.265201,28.773644/@47.1395347,28.7277182,11z/data=!3m1!4b1!4m4!4m3!1m1!4e1!1m0')
})(MapContainer)
//comes in the InfoWindow tag
//<div>
//<h1>{this.state.selectedPlace.name}</h1>
//</div>

//FIRST VERSION