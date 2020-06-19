const options: Intl.DateTimeFormatOptions = {
  day: 'numeric',
  month: 'short',
  year: 'numeric',
};

export const formatDate = (dateIn: string | Date) => {
  const date = new Date(dateIn);
  return new Intl.DateTimeFormat('en-GB', options).format(date);
};
