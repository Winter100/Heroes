import Loading from '@/app/_components/common/Loading';
import { getEnchantAvgPrice } from '@/app/_components/enchant/utils/getEnchantAvgPrice';
import { TabEnchantPriceProps } from '../../../types';

const TabEnchantPrice = ({
  enchant,
  enchantPriceList,
  enchantPriceLoading,
  upgreadeType,
}: TabEnchantPriceProps) => {
  if (enchantPriceLoading) {
    return (
      <div className="w-4">
        <Loading size="3" />
      </div>
    );
  }
  return (
    <div className="w-full text-xs text-yellow-400">
      {getEnchantAvgPrice({
        upgreadeType,
        enchantPriceList,
        enchantName: enchant,
      })?.avgPrice.toLocaleString()}
    </div>
  );
};

export default TabEnchantPrice;
