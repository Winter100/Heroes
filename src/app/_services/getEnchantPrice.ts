import { unstable_cache } from 'next/cache';
import { nexonInstance } from '@/app/_services/nexonInstance';
import {
  EnchantFormatingType,
  ItemPriceApiType,
} from '@/app/_type/enchantType';
import { aggregateByEnchantPreset } from '../_utils/convert';

const fetchEnchantPrice = async (
  itemName: string
): Promise<EnchantFormatingType[]> => {
  const allData: ItemPriceApiType[] = [];
  let nextCursor: string | null = null;
  const delay = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  try {
    do {
      const url = nextCursor
        ? `/marketplace/market-history?item_name=${encodeURIComponent(itemName)}&cursor=${nextCursor}`
        : `/marketplace/market-history?item_name=${encodeURIComponent(itemName)}`;

      const response = await nexonInstance.get(url);
      const data: ItemPriceApiType = response.data;

      allData.push(data);
      nextCursor = data.next_cursor;

      if (nextCursor) await delay(200);
    } while (nextCursor);

    const flatEnchant = allData.flatMap((data) => data.item);
    return aggregateByEnchantPreset(flatEnchant);
  } catch (e) {
    console.error('인챈트 가격 정보를 가져오는데 실패했습니다.', e);
    return [];
  }
};

export const getEnchantPrice = (itemName: string = '인챈트 스크롤') =>
  unstable_cache(
    () => fetchEnchantPrice(itemName),
    ['enchant-price', itemName],
    { revalidate: 3600, tags: ['enchant-price'] }
  )();
