import { makeRegularDate } from './dateUtils';

export const regularizeDates = (data) => {
  if (!data) {
    return;
  }
  return data.map((datapoint) => {
    console.log(datapoint, 'point');
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

// iterate, while growing add +, if down - save result and compare to highest
