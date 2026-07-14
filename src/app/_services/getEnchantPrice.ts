import axios from 'axios';
import { ItemPriceApiType } from '../_type/enchantType';

// Todo 아이템 도 가능하게 추후 바꾸기
export const getEnchantPrice = async () => {
  try {
    const response = await axios.get(
      `/api/getItemPrice?item_name=인챈트 스크롤`
    );

    const data = await response.data;

    return data as ItemPriceApiType[];
  } catch (e) {
    throw e;
  }
};
