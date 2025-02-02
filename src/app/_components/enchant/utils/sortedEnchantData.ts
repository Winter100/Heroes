export const sortedEnchantData = (
  enchantDataWithPrice: {
    item_name: string;
    enchant_name: string;
    average_price: number;
    max_price: number;
    min_price: number;
    date_update: string;
    name: string;
    rank: string;
    upgreadeType: string;
    drop_item_list: string[];
    description: string;
    stat_value: { stat_name: string; stat_value: string }[];
  }[],
  key: "rank" | "name" | "average_price" | "max_price" | "min_price",
  order: "asc" | "desc",
) => {
  return [...enchantDataWithPrice].sort((a, b) => {
    const valA = a[key] ?? (typeof a[key] === "number" ? 0 : "");
    const valB = b[key] ?? (typeof b[key] === "number" ? 0 : "");

    if (typeof valA === "number" && typeof valB === "number") {
      return order === "asc" ? valB - valA : valA - valB;
    }
    if (typeof valA === "string" && typeof valB === "string") {
      return order === "asc"
        ? valA.localeCompare(valB)
        : valB.localeCompare(valA);
    }
    return 0;
  });
};
