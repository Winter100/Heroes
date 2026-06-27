'use client';

import { useMemo } from 'react';
import ErrorDisplay from '@/app/_components/common/error/ErrorDisplay';
import Loading from '@/app/_components/common/Loading';
import { useEnchantPrice, usePreviewAllData } from '@/app/_hooks';
import { EnchantMergePriceType } from '@/app/_type/enchantType';
import { mergeEnchantPrice } from '@/app/_utils/convert';
import EnchantInformationList from './enchant-information-list';

const EnchantInformationContainer = () => {
  const { enchantOptions } = usePreviewAllData();
  const { isLoading, error, data: enchantPriceData } = useEnchantPrice();

  const visibleEnchant: EnchantMergePriceType[] = useMemo(() => {
    return mergeEnchantPrice(enchantOptions.data ?? [], enchantPriceData ?? []);
  }, [enchantOptions.data, enchantPriceData]);

  if (isLoading) return <Loading />;
  if (error) return <ErrorDisplay content="잠시 후 다시 시도해주세요" />;

  return (
    <div className="flex gap-4">
      <div className="mx-auto min-w-[450px] max-w-[650px] flex-1 rounded-md bg-muted/50 p-2">
        <EnchantInformationList
          enchants={visibleEnchant}
          isLoading={isLoading}
        />
      </div>
    </div>
  );
};

export default EnchantInformationContainer;
