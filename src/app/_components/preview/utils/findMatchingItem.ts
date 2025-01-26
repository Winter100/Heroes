type HasStatName = {
  name: string;
};

export const findMatchingItem = <T extends HasStatName>(
  list: T[],
  targetValue: string,
): T => {
  const foundItem = list.find((item) => item.name === targetValue);
  return foundItem || ({ name: targetValue } as T);
};
