import Map from 'google-maps-react'
import React from 'react';
import ReactDOM from 'react-dom';
import GoogleApiComponent from 'google-maps-react'



export class Container extends React.Component {
  render() {
    const style = {
      width: '100vw',
      height: '100vh'
    }
    return (
      <div style={style}>
        <Map google={this.props.google}
          />
      </div>
    )
  }
}

export default GoogleApiComponent({
  apiKey: "AIzaSyBq0H8-VpqDGnA4xyB2WTcQjLARZucRuO8"
})(Container)

export class Map extends React.Component {
  loadMap() {
    if (this.props && this.props.google) {
      // google is available
      const {google} = this.props;
      const maps = google.maps;

      const mapRef = this.refs.map;
      const node = ReactDOM.findDOMNode(mapRef);

      let zoom = 14;
      let lat = 37.774929;
      let lng = -122.419416;
      const center = new maps.LatLng(lat, lng);
      const mapConfig = Object.assign({}, {
        center: center,
        zoom: zoom
      })
      this.map = new maps.Map(node, mapConfig);
    }
    // ...
  }
}