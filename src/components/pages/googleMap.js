import React, { Component } from "react";

import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
 
export class MapContainer extends Component {
  render() {
    return (
      <Map google={this.props.google} zoom={20}>
 
        <Marker onClick={this.onMarkerClick}
            name={'Current location'} 
        />
 
        <InfoWindow onClose={this.onInfoWindowClose}>
        </InfoWindow>
      </Map>
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: ('YOUR_GOOGLE_API_KEY_GOES_HERE')
})(MapContainer)
//comes in the InfoWindow tag
//<div>
//<h1>{this.state.selectedPlace.name}</h1>
//</div>

//FIRST VERSION