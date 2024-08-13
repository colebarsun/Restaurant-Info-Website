import React from 'react';
import './Restaurant.css';

const Restaurant = ({ name, description, hours, contact, menu, specials }) => {
  return (
    <div className="restaurant">
      <h3>{name}</h3>
      <p>{description}</p>
      <p>Hours: {hours}</p>
      <p>Contact: {contact}</p>
      {menu && <p><a href={menu} target="_blank" rel="noopener noreferrer">Menu</a></p>}
      {specials && <p>Specials: {specials}</p>}
    </div>
  );
};

export default Restaurant;
