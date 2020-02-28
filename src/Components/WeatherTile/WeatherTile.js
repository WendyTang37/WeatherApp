import React from 'react';
import './WeatherTile.scss';
import sprite from '../../assets/weather-icons.svg'


const WeatherTile = (props) => {

  const getDisplayDay = () => {
    switch(props.weather.day) {
      case 'monday':
        return 'Mon';
      case 'tuesday':
        return 'Tues';
      case 'wednesday': 
        return 'Wed';
      case 'thursday':
        return 'Thurs';
      case 'friday':
        return 'Fri';
      case 'saturday':
        return 'Sat';
      case 'sunday': 
        return 'Sun';
      default:
        return 'Fun';
    }
  }

  return (
    <div className="WeatherTile" >
      <div className="day-title">{getDisplayDay()}</div>
      <svg className="weather-icon">
        <use href={'#'+props.weather.icon} />
      </svg>
      <div>
        <span className="hi-temp-text">{props.weather.high_temperature}&deg;</span> 
        &nbsp;{props.weather.low_temperature}&deg;
      </div>
    </div>
  )
}

export default WeatherTile;