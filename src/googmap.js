//CommentBox.js
import React, { Component } from 'react';
import axios from 'axios';
import './maps.css';
import {
  withGoogleMap,
  GoogleMap,
  Marker,
} from 'react-google-map';

class GoogMap extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
    //this.loadCommentsFromServer = this.loadCommentsFromServer.bind(this);
    //this.handleCommentSubmit = this.handleCommentSubmit.bind(this);
  }
  initMap() {
    var uluru = {lat: -25.363, lng: 131.044};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 4,
        center: uluru
    });
    var marker = new google.maps.Marker(
     {
         position: uluru,
         map: map
     })
  }
  

   componentDidMount() {
    this.initMap();
  }
 

  render() {
    return (
      <div>
        <h2>Google Maps:</h2>
      </div>
    )
  }
}

export default GoogMap;