'use client';
import { useQueries } from '@tanstack/react-query';
import { getStats } from '../../_services/getStats';
import { getEquipment } from '../../_services/getEquipment';
import { useOcid } from './useOcid';
import { useSearchParams } from 'next/navigation';
import { Item_equipment, NewEquipmentType } from '../../_type/equipmentType';
import { useEffect, useRef } from 'react';
import { useEnchantStore } from '../../_store/useEnchantStore';
import { useGrindStore } from '../../_store/useGrindStore';
import { bagList, getNewTuning } from '../../_utils/preview';
import { useGrind } from './useGrind';

export const useCharacterData = (characterName?: string) => {
  const serachParams = useSearchParams();
  const name = characterName || serachParams.get('name') || '';
  const previousNameRef = useRef(name);
  const resetEnchantSimulations = useEnchantStore(
    (state) => state.resetSimulations
  );
  const resetGrindSimulations = useGrindStore(
    (state) => state.resetSimulations
  );

  useEffect(() => {
    if (previousNameRef.current && previousNameRef.current !== name) {
      resetEnchantSimulations();
      resetGrindSimulations();
    }

    previousNameRef.current = name;
  }, [name, resetEnchantSimulations, resetGrindSimulations]);

  const {
    data: ocid,
    isLoading: isOcidLoading,
    error: ocidError,
  } = useOcid(name);

  const {
    data: grind,
    isLoading: isGrindLoading,
    error: grindError,
  } = useGrind();

  const [stats, equipment] = useQueries({
    queries: [
      {
        queryKey: ['stats', ocid],
        queryFn: () => getStats(ocid),
        enabled: !!ocid,
      },
      {
        queryKey: ['equipment', ocid],
        queryFn: () => getEquipment(ocid),
        enabled: !!ocid && !!grind,
        select: (data: Item_equipment) => {
          const rawItems = data?.item_equipment;

          const bagItems =
            rawItems?.filter((i) => i.item_equipment_page === 'Bag') ?? [];
          const cashItems =
            rawItems?.filter((i) => i.item_equipment_page === 'Cash') ?? [];

          const processedBag = bagList(bagItems).map((item) => {
            const newTuning = getNewTuning(item, grind ?? []);
            return {
              ...item,
              item_option: {
                ...item.item_option,
                tuning_stat: newTuning ?? null,
              },
            };
          });

          return {
            items: [...processedBag],
            cach_items: [...cashItems],
          };
        },
      },
    ],
  });

  const isLoading =
    isOcidLoading || isGrindLoading || stats.isLoading || equipment.isLoading;
  const error = ocidError || grindError || stats.error || equipment.error;

  const items = equipment.data?.items as NewEquipmentType[];
  const cach_items = equipment.data?.cach_items;

  return {
    name,
    ocid,
    stats,
    items,
    cach_items,
    isLoading,
    error,
    grind,
    equipment,
  };
};
