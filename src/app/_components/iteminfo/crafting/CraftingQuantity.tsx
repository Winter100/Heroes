import { useMaterialsStore } from "@/app/_store/materialsStore";
import { memo } from "react";

const CraftingQuantity = memo(
  ({ item_quantity }: { item_quantity: number }) => {
    const count = useMaterialsStore((state) => state.count);
    const value = item_quantity * count;

    return <span className="w-24">{value.toLocaleString()}</span>;
  },
);

export default CraftingQuantity;

CraftingQuantity.displayName = "CraftingQuantity";
