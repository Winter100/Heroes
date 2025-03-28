import React, { memo, useMemo } from "react";
import { MaterialsType } from "@/app/_constant/items/item_crafting_materials_list";
import { getTooltipImageSrc } from "@/app/_utils/getTooltipImageSrc";
import CraftingSelectBtn from "./CraftingSelectBtn";
import CratingSelectImage from "./CratingSelectImage";
import Row from "../../layout/Row";
import { itemInfoMap, materialsMap } from "@/app/_constant/items/item_map";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import ItemTooltipByType from "../../tooltip/ItemTooltipByType";

interface ItemCraftingItemProps {
  item_name: string;
  setMaterials: (item: string, category: string) => void;
  isSelect: boolean;
  category: string;
  materials: MaterialsType[];
  filter: string;
}

const CraftingItem = memo(
  ({
    item_name,
    isSelect,
    setMaterials,
    category,
    materials,
    filter,
  }: ItemCraftingItemProps) => {
    const src = useMemo(() => getTooltipImageSrc(item_name), [item_name]);

    const itemRating =
      filter === "장비"
        ? itemInfoMap?.get(item_name)?.rating
        : materialsMap?.get(item_name)?.item_rating;
    const handleClick = () => {
      setMaterials(item_name, category);
    };

    return (
      <div key={item_name} className="h-full text-xs">
        <Row className="h-full items-center justify-center gap-1">
          <Popover>
            <PopoverTrigger className="h-full">
              <div className="flex h-full items-center justify-center">
                <CratingSelectImage
                  isSelect={isSelect}
                  itemName={item_name}
                  src={src}
                />
              </div>
            </PopoverTrigger>
            <CraftingSelectBtn
              category={category}
              isSelect={isSelect}
              itemName={item_name}
              itemRating={itemRating || "일반"}
              onClick={handleClick}
            />
            <PopoverContent className="dark w-[350px] p-1">
              <ItemTooltipByType
                itemName={item_name}
                category={category}
                {...materials}
              />
            </PopoverContent>
          </Popover>
        </Row>
      </div>
    );
  },
);

export default CraftingItem;

CraftingItem.displayName = "CraftingItem";
