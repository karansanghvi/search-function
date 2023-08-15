import React, { useState } from 'react';

function FlightSearchForm({ onSearch }) {
  const [departurePlace, setDeparturePlace] = useState('');
  const [arrivalPlace, setArrivalPlace] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [arrivalDate, setArrivalDate] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Form submitted'); 
    onSearch({ departurePlace, arrivalPlace, departureDate, arrivalDate });
  };

  const departurePlaces = ['City A', 'City B', 'City C', 'City X', 'City Y', 'City Z']; 
  const arrivalPlaces = ['City A', 'City B', 'City C', 'City X', 'City Y', 'City Z'];

  return (
    <form onSubmit={handleSearch}>
      <select
        value={departurePlace}
        onChange={(e) => setDeparturePlace(e.target.value)}
      >
        <option value="">Select Departure Place</option>
        {departurePlaces.map((place, index) => (
          <option key={index} value={place}>
            {place}
          </option>
        ))}
      </select>
      <select
        value={arrivalPlace}
        onChange={(e) => setArrivalPlace(e.target.value)}
      >
        <option value="">Select Arrival Place</option>
        {arrivalPlaces.map((place, index) => (
          <option key={index} value={place}>
            {place}
          </option>
        ))}
      </select>
      <input
        type="date"
        value={departureDate}
        onChange={(e) => setDepartureDate(e.target.value)}
      />
      <input
        type="date"
        value={arrivalDate}
        onChange={(e) => setArrivalDate(e.target.value)}
      />
      <button type="submit">Search Flights</button>
    </form>
  );
}

export default FlightSearchForm;
