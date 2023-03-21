import React from 'react';

const EventCard = ({ event }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{event.name}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{event.date}</h6>
        <p className="card-text">{event.location}</p>
        <a href={`/events/${event.id}`} className="card-link">
          Learn more
        </a>
      </div>
    </div>
  );
};

export default EventCard;
