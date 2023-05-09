import React, { useState, useEffect } from 'react';
import './weather.scss';
import sun from "../../assets/images/sun+clouds.svg"

const Weather = () => {
  const location = 'Miami,FL';
  const apiKey = 'b0e878a115654f93b0c192141230805';

  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    fetch(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}`)
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

    const currentData = weatherData.current;

    return (
        <>
          <div className="location-name">{weatherData.location.name} Weather</div>
          <img className="sun-pic" src={sun} alt='sun and clouds'/>
          <table>
            <tbody>
              <tr>
                <td>Temperature</td>
                <td>{currentData.temp_f}</td>
                <td>°F</td>
              </tr>
              <tr>
                <td>Wind Speed</td>
                <td>{currentData.wind_mph}</td>
                <td>mph</td>
              </tr>
              <tr>
                <td>Cloud</td>
                <td>{currentData.cloud}</td>
                <td>%</td>
              </tr>
              <tr>
                <td>Gust</td>
                <td>{currentData.gust_mph}</td>
                <td>mph</td>
              </tr>
            </tbody>
          </table>
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

