// src/hooks/useWeather.js
import { useState, useEffect } from 'react';
import { API_KEY } from '../utils/constants';

export const useWeather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [userCoordinates, setUserCoordinates] = useState(() => {
    const saved = sessionStorage.getItem('user-coordinates');
    return saved ? JSON.parse(saved) : null;
  });

  const fetchWeatherData = async (url) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Weather data not found');
      }
      const data = await response.json();
      setWeatherData(data);
    } catch (err) {
      setError(err.message);
      setWeatherData(null);
    } finally {
      setLoading(false);
    }
  };

  const fetchUserWeather = (coords) => {
    const { lat, lon } = coords;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetchWeatherData(url);
  };

  const fetchSearchWeather = (city) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    fetchWeatherData(url);
  };

  const grantLocationAccess = () => {
    if (!navigator.geolocation) {
      setError('Geolocation is not supported by your browser');
      return;
    }

    setLoading(true);
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const coords = {
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        };
        setUserCoordinates(coords);
        sessionStorage.setItem('user-coordinates', JSON.stringify(coords));
        fetchUserWeather(coords);
      },
      (err) => {
        setError('Failed to get location access');
        setLoading(false);
      }
    );
  };

  return {
    weatherData,
    loading,
    error,
    userCoordinates,
    fetchUserWeather,
    fetchSearchWeather,
    grantLocationAccess,
  };
};