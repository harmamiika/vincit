import { makeUnixDate } from '../utils/dateUtils';

// no error handling
export const getData = async (startDate, endDate) => {
  const url = `https://api.coingecko.com/api/v3/coins/bitcoin/market_chart/range?vs_currency=eur&from=${makeUnixDate(
    startDate
  )}&to=${makeUnixDate(endDate)}`;

  const response = await fetch(url);

  return await response.json();
};
