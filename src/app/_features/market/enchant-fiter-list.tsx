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

type Props = {
  enchants: EnchantOptionType[];
};

export type MergedEnchantType = EnchantOptionType &
  Partial<EnchantFormatingType>;

const EnchantFilterList = ({ enchants }: Props) => {
  const { handleSelectItem, currentCategory, currentSubCategory } =
    useCategory('/market/enchant');

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

  return (
    <ItemEnchantTable
      enchants={mergedData}
      isLoading={isLoading}
      handleSelectItem={handleSelectItem}
    />
  );
};

export default EnchantFilterList;
