export const getSpecificTitle = (itemName: string) => {
  const parts = itemName.split(' ');

  if (parts.length > 2) {
    return parts[1];
  } else {
    return parts[0];
  }
};
