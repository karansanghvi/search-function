import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Flight from './components/Flight';
import FlightResults from './components/FlightResults';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Flight />} />
        <Route path="/results" element={<FlightResults />} />
      </Routes>
    </Router>
  );
}
  
export default App;
