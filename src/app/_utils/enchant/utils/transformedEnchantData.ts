export const transformedEnchantData = (
  filteredData: Map<
    string,
    {
      average_price: number;
      date_update: string;
      max_price: number;
      min_price: number;
      item_option?: {
        prefix_enchant_preset_1?: string;
        suffix_enchant_preset_1?: string;
      };
    }
  >,
  type: string
) => {
  return Array.from(filteredData.values()).map(
    ({ item_option, average_price, max_price, min_price, ...rest }) => ({
      ...rest,
      average_price: Math.floor(average_price / 100) * 100,
      max_price,
      min_price,
      // max_price: Math.floor(max_price / 100) * 100,
      // min_price: Math.floor(min_price / 100) * 100,
      enchant_name:
        type === 'prefix'
          ? (item_option?.prefix_enchant_preset_1 ?? '')
          : (item_option?.suffix_enchant_preset_1 ?? ''),
    })
  );
};
