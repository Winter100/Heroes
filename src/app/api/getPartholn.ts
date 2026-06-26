import { PartholnApiType } from '../_type/partholnType';

export const getPartholn = async (): Promise<PartholnApiType[]> => {
  const url = process.env.BACKEND_URL;
  const response = await fetch(`${url}/partholn`);

  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }

  return response.json();
};
