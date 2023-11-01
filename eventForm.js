// import React, { useState } from 'react';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';

// const EventForm = ({ onEventCreate }) => {
//   const [title, setTitle] = useState('');
//   const [date, setDate] = useState(new Date());
//   const [time, setTime] = useState('');
//   const [description, setDescription] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const event = { title, date, time, description };
//     onEventCreate(event);
//     setTitle('');
//     setDate(new Date());
//     setTime('');
//     setDescription('');
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         placeholder="Event Title"
//         value={title}
//         onChange={(e) => setTitle(e.target.value)}
//       />
//       <div className='date_picker'>
//       <DatePicker
//         selected={date}
//         onChange={(selectedDate) => setDate(selectedDate)}
//         dateFormat="yyyy-MM-dd"
//       />
//       </div>
//       <input
//         type="text"
//         placeholder="Event Time"
//         value={time}
//         onChange={(e) => setTime(e.target.value)}
//       />
//       <textarea
//         placeholder="Event Description"
//         value={description}
//         onChange={(e) => setDescription(e.target.value)}
//       ></textarea>
//       <button type="submit">Create Event</button>
//     </form>
//   );
// };

// export default EventForm;


import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const EventForm = ({ onEventCreate }) => {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const event = {
      title,
      date: date.toISOString(), // Convert date to string
      time,
      description,
    };
    onEventCreate(event);
    setTitle('');
    setDate(new Date());
    setTime('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Event Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <div className='date_picker'>
        <DatePicker
          selected={date}
          onChange={(selectedDate) => setDate(selectedDate)}
          dateFormat="yyyy-MM-dd"
        />
      </div>
      <input
        type="text"
        placeholder="Event Time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
      />
      <textarea
        placeholder="Event Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>
      <button type="submit">Create Event</button>
    </form>
  );
};

export default EventForm;
