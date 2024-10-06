interface EnchantData {
  date_update: string;
  item_name: string;
  average_price: number;
  min_price: number;
  max_price: number;
  item_option: {
    suffix_enchant_preset_1: string;
  };
}

export const calculateAveragePrice = (data: EnchantData[]) => {
  if (data.length === 0) {
    return { total: 0, average: 0 };
  }

  const total = data.reduce((sum, item) => sum + item.average_price, 0);
  const average = total / data.length;

  return {
    total: Math.round(total),
    average: Math.round(average),
  };
};
