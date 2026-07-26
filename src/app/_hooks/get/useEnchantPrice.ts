// import { getEnchantPrice } from '@/app/_services/getEnchantPrice';
// import {
//   EnchantFormatingType,
//   ItemPriceApiType,
// } from '@/app/_type/enchantType';

// import { aggregateByEnchantPreset } from '@/app/_utils/convert';
// import { useQuery } from '@tanstack/react-query';

// export const useEnchantPrice = () => {
//   return useQuery<ItemPriceApiType[], Error, EnchantFormatingType[]>({
//     queryKey: ['enchant-price'],
//     queryFn: () => getEnchantPrice(),
//     staleTime: Infinity,
//     select: (data) => {
//       const flatEnchant = data.flatMap((data) => data.item);
//       return aggregateByEnchantPreset(flatEnchant);
//     },
//   });
// };
