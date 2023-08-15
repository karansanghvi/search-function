import React from 'react';
import { useNavigate } from 'react-router-dom';
import FlightSearchForm from './FlightSearchForm';

function Flight() {
  const navigate = useNavigate();
  const flightsData = [
    {
      flightNumber: 'FL123',
      departurePlace: 'City A',
      arrivalPlace: 'City B',
      departureDate: '2023-08-10',
      arrivalDate: '2023-08-11',
    },
    {
      flightNumber: 'FL124',
      departurePlace: 'City X',
      arrivalPlace: 'City Y',
      departureDate: '2023-08-12',
      arrivalDate: '2023-08-13',
    },
  ];

  console.log('flightsData:', flightsData);
  const handleSearch = (searchData) => {
    const filteredFlights = flightsData.filter((flight) => {
      return (
        (searchData.departurePlace === '' ||
          flight.departurePlace === searchData.departurePlace) &&
        (searchData.arrivalPlace === '' ||
          flight.arrivalPlace === searchData.arrivalPlace) &&
        (searchData.departureDate === '' ||
          flight.departureDate === searchData.departureDate) &&
        (searchData.arrivalDate === '' ||
          flight.arrivalDate === searchData.arrivalDate)
      );     
    });
  
    const queryParams = new URLSearchParams();
    queryParams.set('filteredFlights', JSON.stringify(filteredFlights));
    
    navigate(`/results?${queryParams.toString()}`);
  };
  

  return (
    <div className="App">
      <h1>Flight Booking App</h1>
      <FlightSearchForm onSearch={handleSearch} />
    </div>
  );
}

export default Flight;
