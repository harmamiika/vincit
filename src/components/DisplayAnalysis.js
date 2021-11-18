import React from 'react';
import {
  calculateLongestDownwardTrend,
  regularizeDates,
} from '../utils/dataAnalysis';

const DisplayAnalysis = ({ bitcoinData }) => {
  const regularDatesData = regularizeDates(bitcoinData.prices);
  console.log(regularDatesData, 'data yooo');

  const longestDownwardTrend = calculateLongestDownwardTrend(
    bitcoinData.prices
  );
  console.log(longestDownwardTrend, 'this is the longest downward trend');

  const renderAnalysis = () => {
    if (bitcoinData.length === 0) {
      return null;
    }
    return (
      <div>
        <h2>Longest Downward Trend</h2>
        <p>
          In bitcoin’s historical data from CoinGecko, the longest price
          decrease is {longestDownwardTrend} days in the chosen range.
        </p>
      </div>
    );
  };

  return <div>{renderAnalysis()}</div>;
};

export default DisplayAnalysis;
