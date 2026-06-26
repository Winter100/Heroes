import { useQueries } from '@tanstack/react-query';
import { getEnchantOption } from '../api/getEnchantOption';
import { getRaidData } from '../api/getRaidData';
import { getPartholn } from '../api/getPartholn';
import { getGrindOption } from '../api/getGrindOption';
import { EnchantOptionType } from '../_type/enchantType';
import { useMemo } from 'react';
import { getItemSetOption } from '../api/getItemSetOption';
import { EnchantOptionSort, enchantsByGroupSlot } from '../_utils/enchant';
import {
  enchantEffectOrderMap,
  infusionEffectOrderMap,
  QUERY_KEY,
} from '../_constant/keyword';

export const usePreviewAllData = () => {
  const [enchantOptions, infusionOptions, grindOption, itemSetOption] =
    useQueries({
      queries: [
        {
          queryKey: [QUERY_KEY.enchant],
          queryFn: () => getEnchantOption('ENCHANT'),
          staleTime: Infinity,
          select: (data: EnchantOptionType[]) => {
            return EnchantOptionSort(data, enchantEffectOrderMap, 'enchant');
          },
        },
        {
          queryKey: [QUERY_KEY.infusion],
          queryFn: () => getEnchantOption('INFUSION'),
          staleTime: Infinity,
          select: (data: EnchantOptionType[]) => {
            return EnchantOptionSort(data, infusionEffectOrderMap, 'infusion');
          },
        },
        {
          queryKey: [QUERY_KEY.grind],
          queryFn: getGrindOption,
          staleTime: Infinity,
        },
        {
          queryKey: [QUERY_KEY.itemSetOption],
          queryFn: getItemSetOption,
          staleTime: Infinity,
        },
        {
          queryKey: [QUERY_KEY.raid],
          queryFn: getRaidData,
          staleTime: Infinity,
        },
        {
          queryKey: [QUERY_KEY.partholn],
          queryFn: getPartholn,
          staleTime: Infinity,
        },
      ],
    });

  const enchantsBySlot = useMemo(() => {
    return enchantsByGroupSlot({
      enchantOptions: enchantOptions.data ?? [],
      infusions: infusionOptions.data ?? [],
    });
  }, [enchantOptions.data, infusionOptions.data]);

  return {
    enchantOptions,
    infusionOptions,
    grindOption,
    enchantsBySlot,
    itemSetOption,
  };
};
