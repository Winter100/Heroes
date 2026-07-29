/**
 * - 아이템 이름을 리턴
 * @param itemName
 * @returns
 */
export const getSpecificTitle = (itemName: string) => {
  const parts = itemName.split(' ');

  if (parts.length > 2) {
    return parts[1];
  } else {
    return parts[0];
  }
};
