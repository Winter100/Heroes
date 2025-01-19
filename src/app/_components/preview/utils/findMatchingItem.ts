type HasStatName = {
  stat_name: string;
};

export const findMatchingItem = <T extends HasStatName>(
  list: T[],
  targetValue: string,
): T => {
  const foundItem = list.find((item) => item.stat_name === targetValue);
  return foundItem || ({ stat_name: targetValue } as T);
};
