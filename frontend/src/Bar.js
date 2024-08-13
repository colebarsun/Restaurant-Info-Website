import React from 'react';
import './Bar.css';

const Bar = ({ name, description, hours, contact, specials }) => {
  return (
    <div className="bar">
      <h3>{name}</h3>
      <p>{description}</p>
      <p>Hours: {hours}</p>
      <p>Contact: {contact}</p>
      {specials && <p>Specials: {specials}</p>}
    </div>
  );
};

export default Bar;
