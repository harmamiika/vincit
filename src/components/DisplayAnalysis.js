import React from 'react';
import {
  calculateBestBuyAndSellDates,
  calculateHighestTotalVolume,
  calculateLongestDownwardTrend,
} from '../utils/dataAnalysis';
import { makeRegularDate } from '../utils/dateUtils';

const DisplayAnalysis = ({ bitcoinData }) => {
  if (bitcoinData && Object.keys(bitcoinData).length === 0) {
    return null;
  }

  const longestDownwardTrend = calculateLongestDownwardTrend(
    bitcoinData.prices
  );

  const highestTradingVolume = calculateHighestTotalVolume(
    bitcoinData.total_volumes
  );

  const bestBuyAndSellDates = calculateBestBuyAndSellDates(bitcoinData.prices);

  return (
    <div>
      <h2>Longest downward trend</h2>
      <p>
        In bitcoin’s historical data from CoinGecko, the longest price decrease
        is {longestDownwardTrend} days in the chosen range.
      </p>
      <h2>Highest trading volume</h2>
      <p>
        The date with the highest trading volume is{' '}
        {makeRegularDate(highestTradingVolume[0])} with the volume of{' '}
        {highestTradingVolume[1]}.
      </p>
      <h2>Best buy and sell dates</h2>
      {bestBuyAndSellDates ? (
        <p>
          The best date to buy is{' '}
          {makeRegularDate(bestBuyAndSellDates.buyDateDatapoint[0])}, and the
          best date to sell is{' '}
          {makeRegularDate(bestBuyAndSellDates.sellDateDatapoint[0])}. The
          profit is {bestBuyAndSellDates.profit} € per bitcoin.
        </p>
      ) : (
        <p>
          Price only goes down in the selected range. Do not buy or sell
          bitcoin.
        </p>
      )}
    </div>
  );
};

export default DisplayAnalysis;

// const regularDatesData = regularizeDates(bitcoinData.prices);
// console.log(regularDatesData, 'data yooo');
