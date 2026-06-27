import { QUERY_KEY } from '@/app/_constant/keyword';
import { getEnchantPrice } from '@/app/_services/getEnchantPrice';
import {
  EnchantPriceItemType,
  EnchantPriceType,
} from '@/app/_type/enchantType';
import { aggregateByEnchantPreset } from '@/app/_utils/convert';
import { useQuery } from '@tanstack/react-query';

export const useEnchantPrice = () => {
  return useQuery<EnchantPriceType[], Error, EnchantPriceItemType[]>({
    queryKey: [QUERY_KEY.enchantPrice],
    queryFn: () => getEnchantPrice(),
    staleTime: Infinity,
    select: (data) => {
      const flatEnchant = data.flatMap((data) => data.item);
      return aggregateByEnchantPreset(flatEnchant);
    },
  });
};
