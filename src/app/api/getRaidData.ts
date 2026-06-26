import { RaidListType } from '../_type/raidType';

export const getRaidData = async (): Promise<RaidListType[]> => {
  const url = process.env.BACKEND_URL;
  const response = await fetch(`${url}/raids/table`);

  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }

  return response.json();
};
