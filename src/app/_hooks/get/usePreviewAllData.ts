'use client';
import { useQueries } from '@tanstack/react-query';
import { EnchantOptionType } from '../../_type/enchantType';
import { useMemo } from 'react';
import { EnchantOptionSort, enchantsByGroupSlot } from '../../_utils/enchant';
import {
  API_PATH,
  enchantEffectOrderMap,
  infusionEffectOrderMap,
} from '../../_constant/keyword';
import { getApi } from '@/app/api/getIApi';
import { GrindType, ItemRecipe, ItemSetType } from '@/app/_type/itemType';
import { RaidListType } from '@/app/_type/raidType';
import { raidSort } from '@/app/_utils/convert';
import { CharacterInfo } from '@/app/_type/characterType';

export const usePreviewAllData = () => {
  const [
    enchantOptions,
    infusionOptions,
    grindOption,
    itemSetOption,
    itemRecipe,
    raid,
    partholn,
    character,
  ] = useQueries({
    queries: [
      {
        queryKey: [API_PATH.enchant],
        queryFn: () => getApi<EnchantOptionType>(API_PATH.enchant),
        staleTime: Infinity,
        select: (data: EnchantOptionType[]) => {
          return EnchantOptionSort(data, enchantEffectOrderMap, 'enchant');
        },
        retry: 2,
      },
      {
        queryKey: [API_PATH.infusion],
        queryFn: () => getApi<EnchantOptionType>(API_PATH.infusion),
        staleTime: Infinity,
        select: (data: EnchantOptionType[]) => {
          return EnchantOptionSort(data, infusionEffectOrderMap, 'infusion');
        },
        retry: 2,
      },
      {
        queryKey: [API_PATH.grind],
        queryFn: () => getApi<GrindType>(API_PATH.grind),
        staleTime: Infinity,
        retry: 2,
      },
      {
        queryKey: [API_PATH.itemSetOption],
        queryFn: () => getApi<ItemSetType>(API_PATH.itemSetOption),
        staleTime: Infinity,
        retry: 2,
      },
      {
        queryKey: [API_PATH.recipe],
        queryFn: () => getApi<ItemRecipe>(API_PATH.recipe),
        staleTime: Infinity,
        retry: 2,
      },
      {
        queryKey: [API_PATH.raid],
        queryFn: () => getApi<RaidListType>(API_PATH.raid),
        staleTime: Infinity,
        retry: 2,
        select: (data: RaidListType[]) => {
          return raidSort(data);
        },
      },
      {
        queryKey: [API_PATH.partholn],
        queryFn: () => getApi<EnchantOptionType>(API_PATH.partholn),
        staleTime: Infinity,
        retry: 2,
        select: (data: EnchantOptionType[]) => {
          return data
            .map((partholn) => {
              const { affix, ...rest } = partholn;
              return {
                ...rest,
                affix: affix.toLowerCase() as 'partholn',
              };
            })
            .sort((a, b) => Number(a.rank) - Number(b.rank));
        },
      },
      {
        queryKey: [API_PATH.character],
        queryFn: () => getApi<CharacterInfo>(API_PATH.character),
        staleTime: Infinity,
        retry: 2,
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
    itemRecipe,
    raid,
    partholn,
    character,
  };
};
