'use client';
import { useEffect } from 'react';
import {
  ItemListType,
  MaterialsType,
} from '@/app/_constant/items/item_crafting_materials_list';
import { itemCraftingMap } from '@/app/_constant/items/item_map';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

import { getTooltipImageSrc } from '@/app/_utils/getTooltipImageSrc';
import { useMaterialsStore } from '../store/materialsStore';
import Row from '@/app/_components/layout/Row';
import TooltipImage from '@/app/_components/common/tooltip/TooltipImage';
import Item from '@/app/_components/common/item/Item';
import ItemTooltipByType from '@/app/_components/tooltip/ItemTooltipByType';
import {
  CraftingCount,
  ItemCraftingMaterialList,
  ItemCraftingMethod,
} from './crafting';
import { getItemRating, getMaterialsRating } from '../utils/getItemRating';

const MaterialsCrafting = () => {
  const itemName = useMaterialsStore((state) => state.materials);
  const category = useMaterialsStore((state) => state.category);
  const setCount = useMaterialsStore((state) => state.setCount);

  const itemCrafting = itemCraftingMap?.get(itemName);
  const craftingList = itemCrafting?.item_materials as MaterialsType[];

  useEffect(() => {
    setCount(1);
  }, [itemName, setCount]);

  return (
    <div className="relative flex h-full flex-col gap-2">
      {itemName && (
        <>
          <Row className="tems-center items-center justify-center gap-1 text-xs">
            <Popover>
              <PopoverTrigger className="h-full">
                <div className="flex h-full items-center justify-center gap-2">
                  <TooltipImage
                    src={getTooltipImageSrc(itemName)}
                    itemName={itemName}
                    isRatingBorder={true}
                  />
                  <Item.Title
                    type={
                      getItemRating(itemName) ||
                      getMaterialsRating(itemName) ||
                      '일반'
                    }
                  >
                    {itemName}
                  </Item.Title>
                </div>
              </PopoverTrigger>
              <PopoverContent className="dark w-[350px] p-1">
                <ItemTooltipByType itemName={itemName} category={category} />
              </PopoverContent>
            </Popover>
          </Row>
          <Item.Border />

          {itemCrafting && (
            <>
              <ItemCraftingMethod itemCrafting={itemCrafting as ItemListType} />
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
