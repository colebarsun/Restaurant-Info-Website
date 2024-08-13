// src/Event.js
import React from 'react';
import './Event.css';

const Event = ({ name, date }) => {
  return (
    <div className="event">
      <h3>{name}</h3>
      <p>Date: {new Date(date).toLocaleDateString()}</p>
    </div>
  );
};

export default Event;
