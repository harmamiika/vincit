import { makeRegularDate } from './dateUtils';

export const regularizeDates = (data) => {
  if (!data) {
    return;
  }
  return data.map((datapoint) => {
    datapoint[0] = makeRegularDate(datapoint[0]);
    return datapoint;
  });
};

// has no checks if the date changes, relies on api sending an array with one datapoint per day

export const calculateLongestDownwardTrend = (dataArray) => {
  if (!dataArray) {
    return;
  }
  // fix check

  let datapoint = 1;
  let longestCount = 0;
  let currentCount = 0;

  // replace with for loop?
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
  console.log(dataArray);
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
