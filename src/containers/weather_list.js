import React, {Component} from 'react';
import {connect} from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {
  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (F)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }

  renderWeather(cityData) {
    const name = cityData.city.name;
    const temps = cityData.list.map(weather => weather.main.temp * 9/5 - 459.67);
    const pressures = cityData.list.map(weather => weather.main.pressure);
    const humidities = cityData.list.map(weather => weather.main.humidity);
    const {lat, lon} = cityData.city.coord;
    
    return (
      <tr key={name}>
        <td>
          <div>
            <GoogleMap lat={lat} lon={lon}/>
            <div>{name}</div>
          </div>
        </td>
        <td><Chart data={temps} unit="F" color="orange"/></td>
        <td><Chart data={pressures} unit="hPa" color="blue"/></td>
        <td><Chart data={humidities} unit="%" color="green"/></td>
      </tr>
    );
  }
}

function mapStateToProps(state) {
  return {weather: state.weather};
}

export default connect(mapStateToProps)(WeatherList);

