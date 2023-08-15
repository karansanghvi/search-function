import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import FlightList from './FlightList';

function FlightResults() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const filteredFlights = JSON.parse(queryParams.get('filteredFlights'));

  return (
    <div>
      <h1>Flight Search Results</h1>
      <Link to="/">Back to Search</Link>
      <FlightList flights={filteredFlights} />
    </div>
  );
}

export default FlightResults;
