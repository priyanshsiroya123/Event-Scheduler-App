import React, { useState } from 'react';
import EventForm from './eventForm';
import EventList from './EventList';

const Scheduler = () => {
  const [events, setEvents] = useState([]);

  const handleEventCreate = (event) => {
    const newEvent = { ...event, id: Date.now() };
    setEvents([...events, newEvent]);
  };

  return (
    <div className="container">
      <h2>Event Scheduler</h2>
      <EventForm onEventCreate={handleEventCreate} />
      <EventList events={events} />
    </div>
  );
};

export default Scheduler;
