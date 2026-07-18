'use client';
import {
  EnchantFormatingType,
  EnchantOptionType,
} from '@/app/_type/enchantType';
import CheckError from '@/app/_components/common/check-error';
import { useEnchantPrice } from '@/app/_hooks';
import EnchantDetail from './components/enchant-detail';
import { useMemo } from 'react';

interface EnchantFindProps {
  enchants: EnchantOptionType[];
  findEnchantName: string;
}

const EnchantFind = ({ enchants, findEnchantName }: EnchantFindProps) => {
  const { isLoading, data: enchantPriceData } = useEnchantPrice();
  const findEnchant = enchants.find(
    (enchant) => enchant.name === findEnchantName
  );

  const enchantPriceMap = useMemo(() => {
    if (!enchantPriceData) {
      return new Map<string, EnchantFormatingType>();
    }
    return new Map<string, EnchantFormatingType>(
      enchantPriceData.map((price) => [price.item_name, price])
    );
  }, [enchantPriceData]);

  if (!findEnchant)
    return <CheckError text={`${findEnchantName}을 찾을 수 없습니다.`} />;

  return (
    <EnchantDetail
      selectedItem={findEnchant}
      enchantPriceData={enchantPriceMap}
      isLoading={isLoading}
    />
  );
};

export default EnchantFind;
