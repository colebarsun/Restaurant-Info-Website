import React from 'react';
import { Link } from 'react-router-dom';
import './Venue.css';

const Venue = ({ _id, name, description, menu }) => {
  return (
    <div className="venue">
      <Link to={`/venues/${_id}`}>
        <h3>{name}</h3>
      </Link>
      <p>{description}</p>
      {menu && <p><a href={menu} target="_blank" rel="noopener noreferrer">Menu</a></p>}
    </div>
  );
};

export default Venue;
