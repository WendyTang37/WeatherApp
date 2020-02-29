import React, { useState, useEffect } from 'react';
import './WeatherApp.scss';
import WeatherTile from '../WeatherTile/WeatherTile.js'
import { getForecast } from '../../services/WeatherServices.js'

function WeatherApp() {
  const [forecast, setForecast] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getForecast();
      console.log('setting forecast', result);
      setForecast(result);
    };
    fetchData();
  }, []);

  const getWeatherTileList = () => {
    if(forecast) {
      const tileList = forecast.map((day) => {
        return <WeatherTile weather={day} key={day.day} />
      });
      return tileList;
    }

  }

  return (
    <div className="WeatherApp">
      {getWeatherTileList()}
    </div>
  );
}

export default WeatherApp;
