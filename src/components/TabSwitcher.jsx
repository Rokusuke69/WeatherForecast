// src/components/TabSwitcher.jsx
import React from 'react';

const TabSwitcher = ({ activeTab, onTabSwitch }) => {
  const tabs = [
    { id: 'your-weather', label: 'Your Weather' },
    { id: 'search-weather', label: 'Search Weather' },
  ];

  return (
    <div className="tab-container">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          className={`tab ${activeTab === tab.id ? 'current-tab' : ''}`}
          onClick={() => onTabSwitch(tab.id)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default TabSwitcher;