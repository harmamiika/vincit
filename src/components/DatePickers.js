import React, { useState } from 'react';

import { getData } from '../services/bitcoinDataService';

const DatePickers = () => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const onFormSubmit = (event) => {
    event.preventDefault();
    getData();
  };
  return (
    <form onSubmit={onFormSubmit}>
      <input
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
        type="date"
        id="start"
      />
      <input
        value={endDate}
        onChange={(e) => setEndDate(e.target.value)}
        type="date"
        id="end"
      />
      <button>Get Data</button>
    </form>
  );
};

export default DatePickers;
