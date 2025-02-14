import React, { useEffect } from "react";
import { useMaterialsStore } from "@/app/_store/materialsStore";
import MaterialsCraftingItem from "./MaterialsCraftingItem";
import Item from "../common/item/Item";
import {
  ItemListType,
  MaterialsType,
} from "@/app/_constant/items/item_crafting_materials_list";
import ItemTooltipByType from "../tooltip/ItemTooltipByType";
import {
  itemCraftingMap,
  itemInfoMap,
  materialsMap,
} from "@/app/_constant/items/item_map";
import ItemImage from "./info/ItemImage";
import ItemCraftingList from "./info/ItemCraftingList";
import CraftingCount from "./info/CraftingCount";

const MaterialsCrafting = () => {
  const materials = useMaterialsStore((state) => state.materials);
  const category = useMaterialsStore((state) => state.category);

  const itemCrafting = itemCraftingMap?.get(materials);
  const itemRating = itemInfoMap?.get(materials)?.item_rating;
  const materialsRating = materialsMap?.get(materials)?.item_rating;
  const craftingList = itemCrafting?.item_materials as MaterialsType[];

  const setCount = useMaterialsStore((state) => state.setCount);

  useEffect(() => {
    setCount(1);
  }, [materials, setCount]);

  return (
    <div className="relative flex h-full flex-col gap-2">
      {materials && (
        <>
          <div className="flex flex-row items-center justify-center gap-1 text-xs">
            <ItemImage materials={materials} />
            <ItemTooltipByType itemName={materials} category={category} />
            <Item.Title type={itemRating || materialsRating || "일반"}>
              {materials}
            </Item.Title>
          </div>

          <Item.Border />

          <ItemCraftingList itemCrafting={itemCrafting as ItemListType} />

          <Item.Border />
          <div className="text-center text-sm">제작 재료</div>
          <div>
            <ul className="flex h-96 flex-1 flex-col gap-0.5 overflow-y-auto">
              {craftingList?.map((item) => {
                const category = itemCraftingMap?.get(
                  item.item_name,
                )?.item_category;
                return (
                  <li className="flex items-center" key={item.item_name}>
                    <MaterialsCraftingItem
                      category={category || ""}
                      {...item}
                    />
                  </li>
                );
              })}
            </ul>
          </div>
          <Item.Border />
          <CraftingCount />
        </>
      )}
    </div>
  );
};

export default MaterialsCrafting;
