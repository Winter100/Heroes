import { memo } from "react";
import { MaterialsType } from "@/app/_constant/items/item_crafting_materials_list";
import { itemInfoMap, materialsMap } from "@/app/_constant/items/item_map";
import { getTooltipImageSrc } from "@/app/_utils/getTooltipImageSrc";
import TooltipImage from "../../common/tooltip/TooltipImage";
import Item from "../../common/item/Item";
import CraftingQuantity from "../crafting/CraftingQuantity";
import ItemTooltipByType from "../../tooltip/ItemTooltipByType";

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
    const itemRating = itemInfoMap?.get(item_name)?.rating;
    const materialsRating = materialsMap?.get(item_name)?.item_rating;

    const src = getTooltipImageSrc(item_name);

    return (
      <div className="flex w-full flex-col pl-0 sm:pl-2">
        <div className="flex flex-row items-center gap-1">
          <TooltipImage itemName={item_name} src={src} isRatingBorder={true} />
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
