// transform date into unix

export const makeRegularDate = (date = 1577836800) => {
  const regDate = new Date(date * 1000);
  console.log(regDate, 'reg');
  return regDate;
};

export const makeUnixDate = (date) => {
  new Date(date).getTime() / 1000;
  return;
};
