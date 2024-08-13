import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './VenueDetail.css';

const VenueDetail = () => {
  const { id } = useParams();
  const [venue, setVenue] = useState(null);

  useEffect(() => {
    const fetchVenue = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/venues/${id}`);
        setVenue(response.data);
      } catch (error) {
        console.error('Error fetching venue details:', error);
      }
    };
    fetchVenue();
  }, [id]);

  if (!venue) {
    return <div>Loading...</div>;
  }

  return (
    <div className="venue-detail">
      <h2>{venue.name}</h2>
      <p>{venue.description}</p>
      <p>Hours: {venue.hours}</p>
      <p>Contact: {venue.contact}</p>
      <p>Location: {venue.location}</p>
      {venue.menu && (
        <p>
          <a href={venue.menu} target="_blank" rel="noopener noreferrer">
            Menu
          </a>
        </p>
      )}
      {venue.specials && <p>Specials: {venue.specials}</p>}
      {venue.events && <p>Events: {venue.events.join(', ')}</p>}
    </div>
  );
};

export default VenueDetail;
