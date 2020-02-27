import React, { useState } from 'react';
import './WeatherApp.scss';
import WeatherTile from '../WeatherTile/WeatherTile.js'
import { getForecast } from '../../services/WeatherServices.js'

function WeatherApp() {
  const [forecast, setForecast] = useState(getForecast());

  const getWeatherTileList = () => {
    const tileList = forecast.map((day) => {
      return <WeatherTile weather={day} key={day.day} />
    });
    return tileList;
  }

  return (
    <div className="WeatherApp">
      {getWeatherTileList()}
    </div>
  );
}

export default WeatherApp;
