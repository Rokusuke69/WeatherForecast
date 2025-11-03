// src/components/WeatherCard.jsx
import React from 'react';
import windIcon from '../assets/wind.png';
import humidityIcon from '../assets/humidity.png';
import cloudIcon from '../assets/cloud.png';

const WeatherCard = ({ weatherData }) => {
  if (!weatherData) return null;

  const {
    name,
    sys: { country },
    weather: [{ description, icon }],
    main: { temp, humidity },
    wind: { speed },
    clouds: { all },
  } = weatherData;

  const parameters = [
    {
      icon: '../assets/wind.png',
      label: 'Wind Speed',
      value: `${speed} m/s`,
    },
    {
      icon: '../assets/humidity.png',
      label: 'Humidity',
      value: `${humidity}%`,
    },
    {
      icon: '../assets/cloud.png',
      label: 'Cloudiness',
      value: `${all}%`,
    },
  ];

  return (
    <div className="weather-card">
      <div className="weather-header">
        <div className="location">
          <h2 className="city-name">{name}</h2>
          <img
            src={`https://flagcdn.com/144x108/${country.toLowerCase()}.png`}
            alt={country}
            className="country-flag"
          />
        </div>
        <p className="weather-description">{description}</p>
      </div>

      <div className="weather-main">
        <img
          src={`http://openweathermap.org/img/w/${icon}.png`}
          alt={description}
          className="weather-icon"
        />
        <div className="temperature">{Math.round(temp)}°C</div>
      </div>

      <div className="parameter-grid">
        {parameters.map((param, index) => (
          <div key={index} className="parameter-card">
            <img src={param.icon} alt={param.label} className="parameter-icon" />
            <div className="parameter-info">
              <span className="parameter-label">{param.label}</span>
              <span className="parameter-value">{param.value}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeatherCard;