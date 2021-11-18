const url =
  'https://api.coingecko.com/api/v3/coins/bitcoin/market_chart/range?vs_currency=eur&from=1577836800&to=1609376400';

export const getData = async () => {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data, 'get data');
  return data;
};

// handle err?
