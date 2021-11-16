import React from 'react';

import DatePickers from './DatePickers';

const App = () => {
  return (
    <div>
      <DatePickers />
    </div>
  );
};

export default App;

// get date range
// start range date field end date range field
// 00.00 utc

// send request without axios

// do analysis on data and display it

// 1
// How many days is the longest bearish (downward) trend within a given date range?

// ● Definition of a downward trend shall be: “Price of day N is lower than price of day N-1”
// ● Expected output: The maximum amount of days bitcoin’s price was decreasing in a row.

// 2
// Which date within a given date range had the highest trading volume?
// Expected output: The date with the highest trading volume and the volume on that day in euros.

// 3
// ScroogehasaccesstoGyroGearloose’snewestinvention,atimemachine.Scrooge wants to use the time machine to profit from bitcoin. The application should be able to tell for a given date range, the best day for buying bitcoin, and the best day for selling the bought bitcoin to maximize profits. If the price only decreases in the date range, your output should indicate that one should not buy (nor sell) bitcoin on any of the days. You don't have to consider any side effects of time travel or how Scrooge's massive purchases would affect the price history.
// Expected output: A pair of days: The day to buy and the day to sell. In the case when one should neither buy nor sell, return an indicative output of your choice.
