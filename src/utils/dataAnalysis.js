// has no checks for date changes, relies on api sending an array with one datapoint per day

export const calculateLongestDownwardTrend = (dataArray) => {
  if (!dataArray) {
    return;
  }

  let datapoint = 1;
  let longestCount = 0;
  let currentCount = 0;

  while (dataArray[datapoint]) {
    if (dataArray[datapoint][1] < dataArray[datapoint - 1][1]) {
      currentCount++;
    } else {
      longestCount = currentCount > longestCount ? currentCount : longestCount;
      currentCount = 0;
    }
    datapoint++;
  }

  return longestCount;
};

export const calculateHighestTotalVolume = (dataArray) => {
  if (!dataArray) {
    return;
  }

  return dataArray.reduce(
    (highestValue, currentDatapoint) => {
      return (highestValue =
        currentDatapoint[1] > highestValue[1]
          ? currentDatapoint
          : highestValue);
    },
    [null, 0]
  );
};

export const calculateBestBuyAndSellDates = (dataArray) => {
  if (!dataArray) {
    return;
  }

  let maxDifference = dataArray[1][1] - dataArray[0][1];
  let maxElement = dataArray[0];
  let minElement = dataArray[0];
  let maxDifferenceMinElement = dataArray[0];

  for (let i = 0; i < dataArray.length; i++) {
    if (dataArray[i][1] - minElement[1] > maxDifference) {
      maxDifference = dataArray[i][1] - minElement[1];
      maxElement = dataArray[i];
      maxDifferenceMinElement = minElement;
    }
    if (dataArray[i][1] < minElement) {
      minElement = dataArray[i];
    }
  }

  // if price only gets lower
  if (maxDifference <= 0) {
    return null;
  }

  return {
    buyDateDatapoint: maxDifferenceMinElement,
    sellDateDatapoint: maxElement,
    profit: maxDifference,
  };
};

// import { makeRegularDate } from './dateUtils';

// export const regularizeDates = (data) => {
//   if (!data) {
//     return;
//   }
//   return data.map((datapoint) => {
//     datapoint[0] = makeRegularDate(datapoint[0]);
//     return datapoint;
//   });
// };
