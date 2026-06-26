export interface GrindType {
  title: string;
  item: {
    item_slot: string[];
    item_value: {
      stat_name: string;
      stat_one_value: string;
      stat_max_value: string;
      one_ingredient: {
        name: string;
        quantity: string;
      }[];
    }[];
  }[];
}

export const getGrindOption = async (): Promise<GrindType[]> => {
  const url = process.env.BACKEND_URL;
  const response = await fetch(`${url}/items/grind`);

  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }

  return response.json();
};
