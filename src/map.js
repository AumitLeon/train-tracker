//map.js
import React, { Component } from 'react';
import axios from 'axios';
import './maps.css';
 
const google = window.google;
const ELDER_LOCATION = {
  lat: 40.828584,
  lng: -73.879159
};

const EIFFEL_TOWER_POSITION = {
  lat: 48.858608,
  lng: 2.294471
};

const GRAND_CENTRAL_LOC = {
  lat: 40.752769,
  lng: -73.979189
};



class Map extends React.Component {
  constructor() {
    super();
    this.panToArcDeTriomphe = this.panToArcDeTriomphe.bind(this);
  }
  
  componentDidMount() {
    this.map = new google.maps.Map(this.refs.map, {
      center: GRAND_CENTRAL_LOC,
      zoom: 16
    });
    var marker = new google.maps.Marker({
      position: GRAND_CENTRAL_LOC,
      map: this.map
    });
  }
  
  panToArcDeTriomphe() {
    console.log(this)
    this.map.panTo(ELDER_LOCATION);
    var marker = new google.maps.Marker({
      position: ELDER_LOCATION,
      map: this.map
    });
  }
  
  render() {
    const mapStyle = {
      width: '100%',
      height: '400px',
      border: '1px solid black'
    };
    
    return (
      <div>
        <button onClick={this.panToArcDeTriomphe}>Elder ave train station</button>
        <div ref="map" style={mapStyle}>I should be a map!</div>
      </div>
    );
  }
}
export default Map;