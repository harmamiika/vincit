export const makeRegularDate = (date) => {
  const regDate = new Date(date).toDateString();
  return regDate;
};

export const makeUnixDate = (date) => {
  return new Date(date).getTime() / 1000;
};
