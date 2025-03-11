"use client";
import React, { useEffect } from "react";
import { useMaterialsStore } from "@/app/_store/materialsStore";
import {
  ItemListType,
  MaterialsType,
} from "@/app/_constant/items/item_crafting_materials_list";
import {
  itemCraftingMap,
  itemInfoMap,
  materialsMap,
} from "@/app/_constant/items/item_map";

import { getTooltipImageSrc } from "@/app/_utils/getTooltipImageSrc";
import Row from "../../layout/Row";
import TooltipImage from "../../common/tooltip/TooltipImage";
import ItemTooltipByType from "../../tooltip/ItemTooltipByType";
import Item from "../../common/item/Item";
import ItemCraftingList from "../info/ItemCraftingList";
import ItemCraftingMaterialList from "../info/ItemCraftingMaterialList";
import CraftingCount from "../info/CraftingCount";

const MaterialsCrafting = () => {
  const materials = useMaterialsStore((state) => state.materials);
  const category = useMaterialsStore((state) => state.category);

  const itemCrafting = itemCraftingMap?.get(materials);
  const itemRating = itemInfoMap?.get(materials)?.rating;
  const materialsRating = materialsMap?.get(materials)?.item_rating;
  const craftingList = itemCrafting?.item_materials as MaterialsType[];

  const setCount = useMaterialsStore((state) => state.setCount);
  const src = getTooltipImageSrc(materials);

  useEffect(() => {
    setCount(1);
  }, [materials, setCount]);

  return (
    <div className="relative flex h-full flex-col gap-2">
      {materials && (
        <>
          <Row className="tems-center items-center justify-center gap-1 text-xs">
            <TooltipImage
              src={src}
              itemName={materials}
              isRatingBorder={true}
            />
            <ItemTooltipByType itemName={materials} category={category} />
            <Item.Title type={itemRating || materialsRating || "일반"}>
              {materials}
            </Item.Title>
          </Row>
          <Item.Border />

          {itemCrafting && (
            <>
              <ItemCraftingList itemCrafting={itemCrafting as ItemListType} />
              <Item.Border />
            </>
          )}

          {craftingList.length >= 1 && (
            <>
              <ItemCraftingMaterialList
                craftingList={craftingList}
                itemCraftingMap={itemCraftingMap}
              />
              <Item.Border />
            </>
          )}

          <CraftingCount />
        </>
      )}
    </div>
  );
};

export default MaterialsCrafting;
