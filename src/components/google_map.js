import React, {Component} from 'react';

const GOOGLE_MAPS_API_KEY = 'AIzaSyC4WqTETRoXKxlx-zYsP2r-rsDpVfN5vQ8';

class GoogleMap extends Component {

  componentDidMount() {
    new google.maps.Map(this.refs.map, {
      zoom: 12,
      center: {
        lat: this.props.lat,
        lng: this.props.lon,
      }
    });
  }
  
  render() {
    // Can say "this.refs.map" to access the rendered component
    return (
      <div ref="map"/>
    );
  }
}

export default GoogleMap;
