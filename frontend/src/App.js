import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import Venue from './Venue';
import VenueDetail from './VenueDetail';

const App = () => {
  const [venues, setVenues] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchVenues = async () => {
      try {
        const response = await axios.get('http://localhost:5000/venues');
        setVenues(response.data);
      } catch (error) {
        console.error('Error fetching venues:', error);
      }
    };
    fetchVenues();
  }, []);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredVenues = venues.filter(venue =>
    venue.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const location = useLocation();

  return (
    <div className="App">
      <header className="App-header">
        <h1>San Marcos Nightlife</h1>
      </header>
      <div className="container">
        {location.pathname === '/' && (
          <input
            type="text"
            placeholder="Search for venues..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="search-bar"
          />
        )}
        <Routes>
          <Route
            path="/"
            element={
              <>
                <h2>Venues</h2>
                <div className="grid-container">
                  {filteredVenues.map((venue) => (
                    <div key={venue._id} className="grid-item">
                      <Venue
                        _id={venue._id}
                        name={venue.name}
                        description={venue.description}
                        hours={venue.hours}
                        contact={venue.contact}
                        menu={venue.menu}
                        specials={venue.specials}
                        location={venue.location}
                        events={venue.events}
                      />
                    </div>
                  ))}
                </div>
              </>
            }
          />
          <Route path="/venues/:id" element={<VenueDetail />} />
        </Routes>
      </div>
    </div>
  );
};

const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;
