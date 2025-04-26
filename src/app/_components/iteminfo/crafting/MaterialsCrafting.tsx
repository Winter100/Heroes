'use client';
import React, { useEffect } from 'react';
import { useMaterialsStore } from '@/app/_store/materialsStore';
import {
  ItemListType,
  MaterialsType,
} from '@/app/_constant/items/item_crafting_materials_list';
import {
  itemCraftingMap,
  itemInfoMap,
  materialsMap,
} from '@/app/_constant/items/item_map';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

import { getTooltipImageSrc } from '@/app/_utils/getTooltipImageSrc';
import Row from '../../layout/Row';
import TooltipImage from '../../common/tooltip/TooltipImage';
import ItemTooltipByType from '../../tooltip/ItemTooltipByType';
import Item from '../../common/item/Item';
import ItemCraftingList from '../info/ItemCraftingList';
import ItemCraftingMaterialList from '../info/ItemCraftingMaterialList';
import CraftingCount from '../info/CraftingCount';

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
            <Popover>
              <PopoverTrigger className="h-full">
                <div className="flex h-full items-center justify-center gap-2">
                  <TooltipImage
                    src={src}
                    itemName={materials}
                    isRatingBorder={true}
                  />
                  <Item.Title type={itemRating || materialsRating || '일반'}>
                    {materials}
                  </Item.Title>
                </div>
              </PopoverTrigger>
              <PopoverContent className="dark w-[350px] p-1">
                <ItemTooltipByType itemName={materials} category={category} />
              </PopoverContent>
            </Popover>
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
