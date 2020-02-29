import axios from 'axios';

const forecast = [
    {
        'day': 'monday',
        'overview': 'sunny',
        'icon_url': 'http://openweathermap.org/img/wn/01d@2x.png',
        'icon': 'sun',
        'average_temperature': 70,
        'high_temperature': 80,
        'low_temperature': 60,
        'hourly': [],
    },
    {
        'day': 'tuesday',
        'overview': 'sunny',
        'icon_url': 'http://openweathermap.org/img/wn/01d@2x.png',
        'icon': 'cloudy-2',
        'average_temperature': 70,
        'high_temperature': 80,
        'low_temperature': 60,
        'hourly': [],
    },
    {
        'day': 'wednesday',
        'overview': 'sunny',
        'icon_url': 'http://openweathermap.org/img/wn/01d@2x.png',
        'icon': 'cloudy',
        'average_temperature': 70,
        'high_temperature': 80,
        'low_temperature': 60,
        'hourly': [],
    },
    {
        'day': 'thursday',
        'overview': 'sunny',
        'icon_url': 'http://openweathermap.org/img/wn/01d@2x.png',
        'icon': 'cloud',
        'average_temperature': 70,
        'high_temperature': 80,
        'low_temperature': 60,
        'hourly': [],
    },
    {
        'day': 'friday',
        'overview': 'sunny',
        'icon_url': 'http://openweathermap.org/img/wn/01d@2x.png',
        'icon': 'rainy',
        'average_temperature': 70,
        'high_temperature': 80,
        'low_temperature': 60,
        'hourly': [],
    },
    {
        'day': 'saturday',
        'overview': 'sunny',
        'icon_url': 'http://openweathermap.org/img/wn/01d@2x.png',
        'icon': 'thunder',
        'average_temperature': 70,
        'high_temperature': 80,
        'low_temperature': 60,
        'hourly': [],
    },
    {
        'day': 'sunday',
        'overview': 'sunny',
        'icon_url': 'http://openweathermap.org/img/wn/01d@2x.png',
        'icon': 'snowflake',
        'average_temperature': 70,
        'high_temperature': 80,
        'low_temperature': 60,
        'hourly': [],
    }

];

export const getForecast = async () => {
  const forecast = await axios(
    'https://api.weatherbit.io/v2.0/forecast/daily?postal_code=94030&units=I&days=7&key=59046f44ad8242e697266d4e703ed5e6',
  )
  return mapResponseData(forecast.data);

}

const mapResponseData = (response) => {
  let forecastData = response.data.map((forecast) => {
    const weather = {};
    weather.day = new Date(forecast.valid_date).getDay();
    // forecastObj.dateStr= forecast.dt_txt;
    weather.high_temperature = Math.round(forecast.max_temp);
    weather.low_temperature = Math.round(forecast.min_temp);
    weather.icon = forecast.weather.icon;
    return weather;
  });

  console.log('forecastData',forecastData);

  return forecastData;
}

const codeToIcon = {

}
/*
choose which 3hour interval

getUTChour from dt

Math.floor(hour / 3) * 3


*/