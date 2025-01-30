export const mergeEnchantData = (
  enchantData: { name: string; rank: string; upgreadeType: string }[],
  mergedEnchantPriceList: {
    enchant_name: string;
    average_price: number;
    max_price: number;
    min_price: number;
    date_update: string;
  }[],
) => {
  const priceMap = new Map(
    mergedEnchantPriceList.map((item) => [item.enchant_name, item]),
  );

  return enchantData.map((item) => ({
    ...item,
    ...(priceMap.get(item.name) || {
      average_price: 0,
      max_price: 0,
      min_price: 0,
      date_update: "",
    }),
  }));
};
