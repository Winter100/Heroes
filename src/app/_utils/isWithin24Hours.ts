export const isWithinHours = (dateString: string, time: number) => {
  const givenDate = new Date(dateString);
  const now = new Date();

  const diffMs = now.getTime() - givenDate.getTime();

  return diffMs <= time * 60 * 60 * 1000;
};
