// src/components/WeatherApp.jsx
import React, { useState, useEffect } from 'react';
import TabSwitcher from './TabSwitcher';
import GrantLocation from './GrantLocation';
import SearchForm from './SearchForm';
import WeatherCard from './WeatherCard';
import LoadingSpinner from './LoadingSpinner';
import { useWeather } from '../hooks/useWeather';
import '../styles/WeatherApp.css';

const WeatherApp = () => {
  const [activeTab, setActiveTab] = useState('your-weather');
  const {
    weatherData,
    loading,
    error,
    userCoordinates,
    fetchUserWeather,
    fetchSearchWeather,
    grantLocationAccess
  } = useWeather();

  useEffect(() => {
    if (activeTab === 'your-weather' && userCoordinates) {
      fetchUserWeather(userCoordinates);
    }
  }, [activeTab, userCoordinates]);

  const handleTabSwitch = (tab) => {
    setActiveTab(tab);
  };

  const handleSearch = (city) => {
    fetchSearchWeather(city);
  };

  const renderContent = () => {
    if (loading) {
      return <LoadingSpinner />;
    }

    if (activeTab === 'your-weather') {
      if (!userCoordinates) {
        return <GrantLocation onGrantAccess={grantLocationAccess} />;
      }
    }

    if (weatherData) {
      return <WeatherCard weatherData={weatherData} />;
    }

    if (error) {
      return (
        <div className="error-container">
          <img src="/assets/not-found.png" alt="Error" className="error-image" />
          <p className="error-message">{error}</p>
        </div>
      );
    }

    return null;
  };

  return (
    <div className="weather-app">
      <header className="app-header">
        <h1>Weather Forecast</h1>
        <p className="app-subtitle">Real-time weather updates</p>
      </header>

      <TabSwitcher activeTab={activeTab} onTabSwitch={handleTabSwitch} />

      <main className="weather-content">
        {activeTab === 'search-weather' && (
          <SearchForm onSearch={handleSearch} loading={loading} />
        )}
        
        <div className="content-container">
          {renderContent()}
        </div>
      </main>
    </div>
  );
};

export default WeatherApp;