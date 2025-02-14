import { memo } from "react";
import { MaterialsType } from "@/app/_constant/items/item_crafting_materials_list";
import ItemTooltipByType from "../tooltip/ItemTooltipByType";
import ItemImage from "./info/ItemImage";
import CraftingQuantity from "./crafting/CraftingQuantity";
import Item from "../common/item/Item";
import { itemInfoMap, materialsMap } from "@/app/_constant/items/item_map";

interface MaterialsCraftingItemProps extends MaterialsType {
  depth?: number;
  category: string;
}
const MaterialsCraftingItem = memo(
  ({
    item_name,
    item_description,
    item_quantity,
    category,
    // depth,
  }: MaterialsCraftingItemProps) => {
    const itemRating = itemInfoMap?.get(item_name)?.item_rating;
    const materialsRating = materialsMap?.get(item_name)?.item_rating;

    return (
      <div className="flex w-full flex-col pl-2">
        <div className="flex flex-row items-center gap-1">
          <ItemImage materials={item_name} />
          <div className="flex w-full items-center justify-between text-xs">
            <span className="flex-1">
              <div className="flex flex-col">
                <Item.Title type={itemRating || materialsRating || "일반"}>
                  {item_name}
                </Item.Title>
                <span className="text-[10px]">{item_description}</span>
              </div>
            </span>
            <span className="w-3">x</span>
            <CraftingQuantity item_quantity={item_quantity} />
          </div>
        </div>
        <ItemTooltipByType
          key={item_name}
          itemName={item_name}
          category={category || ""}
        />
      </div>
    );
  },
);

export default MaterialsCraftingItem;

MaterialsCraftingItem.displayName = "MaterialsCraftingItem";
