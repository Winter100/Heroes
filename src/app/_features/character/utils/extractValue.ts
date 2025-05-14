export const extractValue = (itemName: string): string | null => {
  const match = itemName.match(/\d+\D*$/);
  return match ? match[0] : null;
};

export const extractNumber = (itemName: string): number | null => {
  const match = itemName.match(/\d+/);
  if (match && match[0]) {
    return parseInt(match[0], 10);
  }
  return null;
};
