import React, { useState } from 'react';
import './SelectTimeslot.css';

const SelectTimeslot = ({ onDateTimeSelect, onBack }) => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const handleTimeChange = (event) => {
    setTime(event.target.value);
  };

  const handleNextClick = () => {
    if (date && time) {
      const dateTime = new Date(`${date}T${time}`);
      onDateTimeSelect(dateTime);
    }
  };

  return (
    <div className="timeslot-container">
      <input type="date" value={date} onChange={handleDateChange} />
      <input type="time" value={time} onChange={handleTimeChange} />
      <button onClick={onBack}>Back</button>
      {date && time && (
        <button onClick={handleNextClick}>Next</button>
      )}
    </div>
  );
};

export default SelectTimeslot;
