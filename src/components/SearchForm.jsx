// src/components/SearchForm.jsx
import React, { useState } from 'react';

const SearchForm = ({ onSearch, loading }) => {
  const [city, setCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim()) {
      onSearch(city.trim());
      setCity('');
    }
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <div className="search-input-container">
        <input
          type="text"
          placeholder="Search for city..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="search-input"
          disabled={loading}
        />
        <button type="submit" className="search-btn" disabled={loading || !city.trim()}>
          <img src="/assets/search.png" alt="Search" className="search-icon" />
        </button>
      </div>
    </form>
  );
};

export default SearchForm;