import { ItemSetType } from '../_type/itemType';

export const getItemSetOption = async (): Promise<ItemSetType[]> => {
  const url = process.env.BACKEND_URL;
  const response = await fetch(`${url}/items/set-option`);

  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }

  return response.json();
};
