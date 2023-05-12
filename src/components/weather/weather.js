import React, { useState, useEffect } from 'react';
import './weather.scss';


const Weather = () => {
  const apiKey = 'b0e878a115654f93b0c192141230805';

  const [weatherData, setWeatherData] = useState(null);

  const getDaySuffix = (day) => {
    if (day >= 11 && day <= 13) {
      return "th";
    }

    const lastDigit = day % 10;
    switch (lastDigit) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  };

  useEffect(() => {
    fetch(`http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=33130&days=5`)
    .then(response => response.json())
    .then(jsonData => {
      setWeatherData(jsonData);
    })
    .catch(error => {
      console.error('Error fetching weather data:', error);
    });
}, []);

const renderWeatherData = () => {
  if (!weatherData) {
    return <p>Loading weather data...</p>;
  }

  const forecastData = weatherData.forecast.forecastday;

  return (
    
    
    <>
      
      {forecastData.map((forecast, index) => {
        const date = new Date(forecast.date);
        const day = date.getDate();
        const month = date.toLocaleString('en-US', {
          month: 'long'
        });
        const daySuffix = getDaySuffix(day);
          const formattedDate = `${month} ${day}${daySuffix}`;

        return (
          <div key={index} className="forecast">
            <div className='date'>{formattedDate}</div>
            <div>Temperature: {forecast.day.avgtemp_f}°F</div>
            <div>Wind Speed: {forecast.day.maxwind_mph} mph</div>
            <div>Rain {forecast.day.totalprecip_in} In</div>
            <div>UV Index {forecast.day.uv} /11 </div>
          </div>
        );
      })}
    </>
  );
};


return (
  <div className="weather-box">
    {renderWeatherData()}
  </div>
);
};

export default Weather;