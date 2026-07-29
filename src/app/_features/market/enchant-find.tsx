'use client';

import CheckError from '@/app/_components/common/check-error';
import EnchantDetail from './components/enchant-detail';
import { MergedEnchantType } from './enchant-fiter-list';

interface EnchantFindProps {
  enchants: MergedEnchantType[];
  findEnchantName: string;
}

const EnchantFind = ({ enchants, findEnchantName }: EnchantFindProps) => {
  const findEnchant = enchants.find(
    (enchant) => enchant.name === findEnchantName
  );

  if (!findEnchant)
    return <CheckError text={`${findEnchantName}을 찾을 수 없습니다.`} />;

  return <EnchantDetail selectedItem={findEnchant} />;
};

export default EnchantFind;
