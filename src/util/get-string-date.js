export const getStringedDate = (targetDate) => {
  // YYYY-MM-DD
  let year = Number(targetDate.getFullYear());
  let month = Number(targetDate.getMonth() + 1);
  let date = Number(targetDate.getDate());

  if (month < 10) {
    month = `0${month}`;
  }

  if (date < 10) {
    date = `0${date}`;
  }
  return `${year}-${month}-${date}`;
};
