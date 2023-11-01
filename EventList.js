import React from 'react';

const EventList = ({ events }) => {
  return (
    <ul>
      {events.map((event) => (
        <li key={event.id}>
          <h3>{event.title}</h3>
          <p>Date: {event.date}</p>
          <p>Time: {event.time}</p>
          <p>Description: {event.description}</p>
        </li>
      ))}
    </ul>
  );
};

export default EventList;
