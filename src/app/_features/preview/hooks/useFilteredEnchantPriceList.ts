import { useEnchantPriceStore } from '@/app/_store/enchantPriceStore';

export const useFilteredEnchantPriceList = (upgreadeType: string) => {
  const prefixPriceList = useEnchantPriceStore((state) => state.prefix);
  const suffixPriceList = useEnchantPriceStore((state) => state.suffix);
  const enchantPriceList =
    upgreadeType === 'prefix' ? prefixPriceList : suffixPriceList;
  const enchantPriceLoading = useEnchantPriceStore(
    (state) => state.enchantPriceLoading
  );

  return { enchantPriceList, enchantPriceLoading };
};
