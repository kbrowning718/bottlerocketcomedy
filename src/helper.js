export const getDateString = (utcDate) => {
  const date = new Date(utcDate);

  return date.toLocaleDateString();
};
