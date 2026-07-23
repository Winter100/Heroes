'use client';

import { useMemo } from 'react';
import {
  EnchantFormatingType,
  EnchantOptionType,
} from '@/app/_type/enchantType';
import ItemEnchantTable from './components/item-enchant-table';
import { useCategory } from '@/app/_hooks/custom/useCategory';
import { enchantFilter } from '@/app/_utils/convert';
import { useEnchantPrice } from '@/app/_hooks';

type SortKey = 'rank' | 'name' | 'affix' | 'average_price' | 'max_price';

type Props = {
  enchants: EnchantOptionType[];
};

export type MergedEnchantType = EnchantOptionType &
  Partial<EnchantFormatingType>;

const EnchantFilterList = ({ enchants }: Props) => {
  const {
    currentCategory,
    currentSubCategory,
    currentSortKey,
    currentSortOrder,
    handleSort,
  } = useCategory('/market/enchant');

  const { isLoading, data: enchantPriceData } = useEnchantPrice();

  const filteredData = useMemo(() => {
    const filterValue = !!currentCategory || !!currentSubCategory;
    return filterValue
      ? enchantFilter(enchants, currentCategory, currentSubCategory)
      : enchants;
  }, [enchants, currentCategory, currentSubCategory]);

  const enchantPriceMap = useMemo(() => {
    if (!enchantPriceData) {
      return new Map<string, EnchantFormatingType>();
    }
    return new Map<string, EnchantFormatingType>(
      enchantPriceData.map((price) => [price.item_name, price])
    );
  }, [enchantPriceData]);

  const mergedData: MergedEnchantType[] = useMemo(() => {
    return filteredData.map((item) => {
      const priceInfo = enchantPriceMap.get(item.name);
      return {
        ...item,
        ...priceInfo,
      };
    });
  }, [filteredData, enchantPriceMap]);

  const sortedEnchants = useMemo(() => {
    return [...mergedData].sort((a, b) => {
      const key = currentSortKey as SortKey;

      const aExists = a[key] !== null && a[key] !== undefined && a[key] !== 0;
      const bExists = b[key] !== null && b[key] !== undefined && b[key] !== 0;

      if (!aExists && bExists) return 1;
      if (aExists && !bExists) return -1;

      const aValue = a[key] ?? 0;
      const bValue = b[key] ?? 0;

      if (aValue < bValue) return currentSortOrder === 'asc' ? -1 : 1;
      if (aValue > bValue) return currentSortOrder === 'asc' ? 1 : -1;
      return 0;
    });
  }, [mergedData, currentSortKey, currentSortOrder]);

  const renderSortIndicator = (key: string): string | null => {
    if (currentSortKey !== key) return null;
    return currentSortOrder === 'asc' ? ' ▲' : ' ▼';
  };

  return (
    <ItemEnchantTable
      enchants={sortedEnchants}
      isLoading={isLoading}
      handleSort={handleSort}
      renderSortIndicator={renderSortIndicator}
    />
  );
};

export default EnchantFilterList;
