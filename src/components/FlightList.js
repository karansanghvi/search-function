import React from 'react';
import './FlightList.css'; 

function FlightList({ flights }) {
  return (
    <div className="flight-list-container">
      <h2 className="flight-list-title">Available Flights</h2>
      <ul className="flight-list">
        {flights.map((flight, index) => (
          <li className="flight-item" key={index}>
            <p className="flight-info">Flight Number: {flight.flightNumber}</p>
            <p className="flight-info">Departure: {flight.departurePlace}</p>
            <p className="flight-info">Arrival: {flight.arrivalPlace}</p>
            <p className="flight-info">Departure Date: {flight.departureDate}</p>
            <p className="flight-info">Arrival Date: {flight.arrivalDate}</p>
            <hr className="flight-divider" />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FlightList;
