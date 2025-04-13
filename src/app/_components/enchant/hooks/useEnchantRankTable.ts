import { useEnchantTable } from '@/app/_hooks/useEnchantTable/useEnchantTable';
import { useEffect, useMemo, useRef } from 'react';
import { mergeEnchantData } from '../utils/mergeEnchantData';
import { sortedEnchantData } from '../utils/sortedEnchantData';
import {
  EnchantStoreType,
  useSelectEnchantStore,
} from '@/app/_store/selectEnchantStore';
import { useEnchantFilterStore } from '@/app/_store/enchantFilterStore';
import { EnchantKeyType, EnchantRankTableProps } from '@/app/_type/enchantType';
import { useSortKey } from '@/app/_hooks/useSortKey/useSortKey';

export const useEnchantRankTable = ({ enchantData }: EnchantRankTableProps) => {
  const { mergedEnchantPriceList, isLoading } = useEnchantTable();
  const { dropRaidOrItemName, enchantFilterName } = useEnchantFilterStore(
    (state) => ({
      dropRaidOrItemName: state.dropRaidOrItemName,
      enchantFilterName: state.enchantFilterName,
    })
  );
  const { sortKey, sortOrder, handleSort } = useSortKey<EnchantKeyType>('rank');

  const { selecteEnchant, setEnchant, resetSelectEnchant } =
    useSelectEnchantStore((state) => ({
      setEnchant: state.setEnchant,
      selecteEnchant: state.enchant,
      resetSelectEnchant: state.resetSelectEnchant,
    }));

  const prevSelectedNameRef = useRef(selecteEnchant?.name);
  const enchantDataWithPrice = useMemo(
    () => mergeEnchantData(enchantData, mergedEnchantPriceList),
    [enchantData, mergedEnchantPriceList]
  );

  const sortedData = sortedEnchantData(
    enchantDataWithPrice as EnchantStoreType[],
    sortKey,
    sortOrder
  );

  useEffect(() => {
    if (!isLoading && selecteEnchant?.name) {
      const hasDataChanged =
        prevSelectedNameRef.current === selecteEnchant.name;

      if (!hasDataChanged) {
        const updatedEnchant = sortedData.find(
          (e) => e?.name === selecteEnchant.name
        );

        if (
          updatedEnchant &&
          updatedEnchant.average_price !== selecteEnchant.average_price
        ) {
          setEnchant(updatedEnchant as EnchantStoreType);
        }
      }
      prevSelectedNameRef.current = selecteEnchant.name;
    }
  }, [isLoading, selecteEnchant, sortedData, setEnchant]);

  const filteredData = sortedData.filter((enchant) => {
    if (enchantFilterName) {
      const searchChars = Array.from(enchantFilterName);
      const nameMatches = searchChars.every((char) =>
        enchant.name.includes(char)
      );
      if (!nameMatches) return false;
    }

    if (dropRaidOrItemName === 'all') {
      return true;
    }

    const hasMatchingItems = sortedData.some((enchant) =>
      enchant.drop_item_list.includes(dropRaidOrItemName || '')
    );

    if (!hasMatchingItems) {
      return true;
    }

    return enchant.drop_item_list.includes(dropRaidOrItemName || '');
  });

  return {
    filteredData,
    handleSort,
    resetSelectEnchant,
    sortKey,
    sortOrder,
    setEnchant,
    isLoading,
    selecteEnchant,
  };
};
