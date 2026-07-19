export const getEnchantPrice = async <T>(): Promise<T[]> => {
  try {
    const response = await fetch(`/api/getItemPrice?item_name=인챈트 스크롤`);

    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }

    return response.json();
  } catch {
    return [];
  }
};
