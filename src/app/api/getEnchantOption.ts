import { EnchantOptionType } from '../_type/enchantType';

export const getEnchantOption = async (
  query: 'ENCHANT' | 'INFUSION' = 'ENCHANT'
): Promise<EnchantOptionType[]> => {
  const url = process.env.BACKEND_URL;
  const response = await fetch(`${url}/enchants?category=${query}`);

  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }

  return response.json();
};
