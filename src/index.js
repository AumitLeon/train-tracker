//index.js
import React from 'react';
import ReactDOM from 'react-dom';

import './maps.css'


const google = window.google;
const ARC_DE_TRIOMPHE_POSITION = {
  lat: 40.828584,
  lng: -73.879159
};

const EIFFEL_TOWER_POSITION = {
  lat: 48.858608,
  lng: 2.294471
};

class Map extends React.Component {
  constructor() {
    super();
    this.panToArcDeTriomphe = this.panToArcDeTriomphe.bind(this);
  }
  
  componentDidMount() {
    this.map = new google.maps.Map(this.refs.map, {
      center: EIFFEL_TOWER_POSITION,
      zoom: 16
    });
  }
  
  panToArcDeTriomphe() {
    console.log(this)
    this.map.panTo(ARC_DE_TRIOMPHE_POSITION);
  }
  
  render() {
    const mapStyle = {
      width: 500,
      height: 500,
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

ReactDOM.render(
  <Map />,
  document.getElementById('root')
);