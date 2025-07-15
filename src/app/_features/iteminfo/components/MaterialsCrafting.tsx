'use client';
import { useEffect } from 'react';
import {
  ItemListType,
  MaterialsType,
} from '@/app/_constant/items/item_crafting_materials_list';
import { itemCraftingMap } from '@/app/_constant/items/item_map';
import Item from '@/app/_components/common/item/Item';
import {
  CraftingCount,
  ItemCraftingMaterialList,
  ItemCraftingMethod,
} from './crafting';

import PopOverItem from '@/app/_components/common/popoverItem/PopOverItem';

interface MaterialsCraftingProps {
  itemName: string;
  category: string;
  count: number;
  setCount: (ea: number) => void;
}

const MaterialsCrafting = ({
  category,
  itemName,
  count,
  setCount,
}: MaterialsCraftingProps) => {
  const itemCrafting = itemCraftingMap?.get(itemName);
  const craftingList = itemCrafting?.item_materials as MaterialsType[];

  useEffect(() => {
    setCount(1);
  }, [itemName, setCount]);

  return (
    <div className="relative mt-4 flex w-full flex-col gap-2 sm:mt-0">
      {itemName && (
        <>
          <div className="flex items-center justify-center">
            <PopOverItem category={category} itemName={itemName} />
          </div>
          <Item.Border />

          {itemCrafting && (
            <>
              <ItemCraftingMethod itemCrafting={itemCrafting as ItemListType} />
              <Item.Border />
            </>
          )}

          {craftingList.length >= 1 && (
            <ItemCraftingMaterialList
              craftingList={craftingList}
              itemCraftingMap={itemCraftingMap}
            />
          )}

          <CraftingCount count={count} setCount={setCount} />
        </>
      )}
    </div>
  );
};

export default MaterialsCrafting;
