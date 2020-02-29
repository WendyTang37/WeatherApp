import React from 'react';
import './WeatherTile.scss';

const WeatherTile = (props) => {

  const getDisplayDay = () => {
    switch(props.weather.day) {
      case 1:
        return 'Mon';
      case 2:
        return 'Tues';
      case 3: 
        return 'Wed';
      case 4:
        return 'Thurs';
      case 5:
        return 'Fri';
      case 6:
        return 'Sat';
      case 0: 
        return 'Sun';
      default:
        return 'Fun';
    }
  }

  return (
    <div className="WeatherTile" >
      <div className="day-title">{getDisplayDay()}</div>
      <img className="weather-icon" src={'/assets/icons/' + props.weather.icon + '.png'}></img>
      <div>
        <span className="hi-temp-text">{props.weather.high_temperature}&deg;</span> 
        &nbsp;{props.weather.low_temperature}&deg;
      </div>
    </div>
  )
}

export default WeatherTile;