import clsx from "clsx";
import Image from "next/image";
import React, { memo } from "react";
import { getImageByName } from "@/app/_utils/getImageByName";
import { MaterialsType } from "@/app/_constant/items/item_crafting_materials_list";
import ItemTooltipByType from "../../tooltip/ItemTooltipByType";
import ItemImage from "../info/ItemImage";
import Item from "../../common/item/Item";

interface ItemCraftingItemProps {
  item_name: string;
  setMaterials: (item: string, category: string) => void;
  isSelect: boolean;
  category: string;
  materials: MaterialsType[];
}

const CraftingItem = memo(
  ({
    item_name,
    isSelect,
    setMaterials,
    category,
    materials,
  }: ItemCraftingItemProps) => {
    const src = getImageByName(item_name);
    return (
      <div key={item_name} className="h-full text-xs">
        <div className="flex h-full flex-row items-center justify-center gap-1">
          {isSelect ? (
            <div className="w-10">
              <ItemImage materials={item_name} />
            </div>
          ) : (
            <div className="w-10">
              <a data-tooltip-id={item_name}>
                <Image
                  key={item_name}
                  className={clsx("object-scale-down")}
                  width={35}
                  height={35}
                  src={src}
                  alt={item_name}
                  priority={true}
                />
              </a>
            </div>
          )}
          <div
            className={clsx(
              "h-full w-full flex-col items-start justify-center hover:bg-zinc-800",
            )}
          >
            <button
              className="h-full w-full text-start"
              onClick={() => setMaterials(item_name, category)}
            >
              {isSelect ? (
                <Item.Title item_name={item_name} type="일반">
                  <span>{item_name}</span>
                </Item.Title>
              ) : (
                <span>{item_name}</span>
              )}
            </button>
          </div>
        </div>
        <ItemTooltipByType
          itemName={item_name}
          category={category}
          {...materials}
        />
      </div>
    );
  },
);

export default CraftingItem;

CraftingItem.displayName = "CraftingItem";
