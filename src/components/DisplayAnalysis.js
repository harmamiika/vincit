import React from 'react';
import {
  calculateBestBuyAndSellDates,
  calculateBestDatesToBuyAndSell,
  calculateHighestTotalVolume,
  calculateLongestDownwardTrend,
  regularizeDates,
} from '../utils/dataAnalysis';
import { makeRegularDate } from '../utils/dateUtils';

const DisplayAnalysis = ({ bitcoinData }) => {
  const renderAnalysis = () => {
    if (bitcoinData && Object.keys(bitcoinData).length === 0) {
      return null;
    }

    const regularDatesData = regularizeDates(bitcoinData.prices);
    console.log(regularDatesData, 'data yooo');

    const longestDownwardTrend = calculateLongestDownwardTrend(
      bitcoinData.prices
    );

    const highestTradingVolume = calculateHighestTotalVolume(
      bitcoinData.total_volumes
    );

    const bestBuyAndSellDates = calculateBestBuyAndSellDates(
      bitcoinData.prices
    );

    console.log(highestTradingVolume[1], 'highest volume is this');
    return (
      <div>
        <h2>Longest downward trend</h2>
        <p>
          In bitcoin’s historical data from CoinGecko, the longest price
          decrease is {longestDownwardTrend} days in the chosen range.
        </p>
        <h2>Highest trading volume</h2>
        <p>
          The date with the highest trading volume is{' '}
          {makeRegularDate(highestTradingVolume[0])} with the volume of{' '}
          {highestTradingVolume[1]}€.
        </p>
        <h2>Best buy and sell dates</h2>
        {bestBuyAndSellDates ? (
          <p>
            The best date to buy is{' '}
            {makeRegularDate(bestBuyAndSellDates.buyDateDatapoint[0])}
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

  return <div>{renderAnalysis()}</div>;
};

export default DisplayAnalysis;
