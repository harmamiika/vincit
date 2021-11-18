import React, { useState } from 'react';

import { getData } from '../services/bitcoinDataService';

const DatePickers = ({ setBitcoinData }) => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const onFormSubmit = async (event) => {
    event.preventDefault();
    const bitcoinData = await getData();
    setBitcoinData(bitcoinData);
  };

  // always add 1h to end

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
