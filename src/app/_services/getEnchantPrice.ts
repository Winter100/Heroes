import axios from 'axios';
import { EnchantPriceType } from '../_type/enchantType';

export const getEnchantPrice = async () => {
  try {
    const response = await axios.get(`/api/getEnchantPrice`);

    const data = await response.data;

    return data as EnchantPriceType[];
  } catch (e) {
    throw e;
  }
};
