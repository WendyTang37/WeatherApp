import React from 'react';

const WeatherTile = (props) => {

  return (
    <div className="WeatherTile">
        <p>{props.weather.day}</p>
        <p>{props.weather.overview}</p>
    </div>
  )
}

export default WeatherTile;