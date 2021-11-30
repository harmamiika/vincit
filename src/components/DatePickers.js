import React, { useState } from 'react';

import { getData } from '../services/bitcoinDataService';

const DatePickers = ({ setBitcoinData }) => {
  const [startDate, setStartDate] = useState('2021-01-01');
  const [endDate, setEndDate] = useState('2021-02-01');

  const onFormSubmit = async (event) => {
    event.preventDefault();

    if (!startDate || !endDate || startDate === endDate) {
      console.log('invalid input');
      return;
    }

    const bitcoinData = await getData(startDate, endDate);
    setBitcoinData(bitcoinData);
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
