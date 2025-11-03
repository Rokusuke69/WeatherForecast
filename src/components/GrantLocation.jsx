// src/components/GrantLocation.jsx
import React from 'react';

const GrantLocation = ({ onGrantAccess }) => {
  return (
    <div className="grant-location">
      <img 
        src="../assets/location.png" 
        alt="Location Access" 
        className="grant-icon"
      />
      <h2 className="grant-title">Grant Location Access</h2>
      <p className="grant-description">
        Allow access to your location to get real-time weather information for your area.
      </p>
      <button 
        className="grant-btn" 
        onClick={onGrantAccess}
      >
        Grant Access
      </button>
    </div>
  );
};

export default GrantLocation;