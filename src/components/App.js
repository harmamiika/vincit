import React, { useState } from 'react';

import DatePickers from './DatePickers';
import DisplayAnalysis from './DisplayAnalysis';

const App = () => {
  const [bitcoinData, setBitcoinData] = useState({});

  console.log(bitcoinData, 'data');

  const containerStyles = {
    margin: 'auto',
    width: '50%',
  };

  return (
    <div style={containerStyles}>
      <h1>Bitcoin analysis</h1>
      <DatePickers setBitcoinData={setBitcoinData} />
      <DisplayAnalysis bitcoinData={bitcoinData} />
    </div>
  );
};

export default App;
