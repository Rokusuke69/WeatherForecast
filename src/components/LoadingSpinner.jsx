// src/components/LoadingSpinner.jsx
import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="loading-spinner">
      <img 
        src="/assets/loading.gif" 
        alt="Loading..." 
        className="spinner"
      />
      <p className="loading-text">Loading weather data...</p>
    </div>
  );
};

export default LoadingSpinner;